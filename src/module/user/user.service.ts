import * as bcrypt from 'bcrypt'

import { ConflictException, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { PostgresUsersRepositoryService } from 'src/repositories/users/postgres-users-repository.service'

@Injectable()
export class UserService {
  constructor(private readonly postgresRepository: PostgresUsersRepositoryService) {}
  async create(createUserDto: CreateUserDto) {
    const { email, name, password } = createUserDto

    const findUser = await this.postgresRepository.find(email)

    if (findUser) {
      throw new ConflictException('User already exists')
    }

    const data: CreateUserDto = {
      email,
      name,
      password: await this.hashPassword(password),
    }

    await this.postgresRepository.create(data)
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12)
  }
}
