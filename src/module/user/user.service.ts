import * as bcrypt from 'bcrypt'

import { ConflictException, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { PostgresUsersRepositoryService } from 'src/repositories/users/postgres-users-repository.service'

@Injectable()
export class UserService {
  public constructor(private readonly postgresRepository: PostgresUsersRepositoryService) {}
  public async create(createUserDto: CreateUserDto): Promise<void> {
    const { email, name, password } = createUserDto

    const findUser = await this.postgresRepository.findByEmail(email)

    if (findUser) {
      throw new ConflictException('User already exists')
    }

    const encryptedPassword = await this.hashPassword(password)

    const data: CreateUserDto = {
      email,
      name,
      password: encryptedPassword,
    }

    await this.postgresRepository.create(data)
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12)
  }
}
