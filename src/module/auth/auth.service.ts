import * as bcrypt from 'bcrypt'

import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PostgresUsersRepositoryService } from 'src/repositories/users/postgres-users-repository.service'
import { UsersDTO } from 'src/repositories/users/dto/UsersDTO'
import { User } from '../user/entities/user.entity'
import { UserPayload } from './types/user-payload'
import { JwtService } from '@nestjs/jwt'
import { UserToken } from './types/user-token'

@Injectable()
export class AuthService {
  public constructor(
    private readonly postgresRepository: PostgresUsersRepositoryService,
    private readonly jwtService: JwtService,
  ) {}

  public login(user: User): UserToken {
    const payload: UserPayload = {
      id: user.id,
      name: user.name,
    }

    const jwtToken = this.jwtService.sign(payload)

    return {
      jwtToken,
    }
  }

  public async validateUser(email: string, password: string): Promise<UsersDTO> {
    const findUser = await this.postgresRepository.findByEmail(email)

    if (findUser) {
      const isMatch = await this.comparePassword(password, findUser.password)

      if (isMatch) {
        return { ...findUser, password: null }
      }
    }

    throw new UnauthorizedException('Email or password incorrect')
  }

  private comparePassword(password: string, hashPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashPassword)
  }
}
