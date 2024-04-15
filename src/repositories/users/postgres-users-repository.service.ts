import { Injectable } from '@nestjs/common'
import { IPostgresUsersRepository } from './interface/postgres-users-repository.interface'
import { UsersDTO } from './dto/UsersDTO'
import { PrismaService } from 'src/lib/prisma/prisma.service'

@Injectable()
export class PostgresUsersRepositoryService implements IPostgresUsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async find(email: string): Promise<UsersDTO | null> {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    })
  }
  async create(user: UsersDTO): Promise<void> {
    await this.prisma.user.create({
      data: {
        ...user,
      },
    })
  }
}
