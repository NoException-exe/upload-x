import { Injectable } from '@nestjs/common'
import { IPostgresUsersRepository } from './interface/postgres-users-repository.interface'
import { UsersDTO } from './dto/UsersDTO'
import { PrismaService } from 'src/lib/prisma/prisma.service'

@Injectable()
export class PostgresUsersRepositoryService implements IPostgresUsersRepository {
  public constructor(private readonly prisma: PrismaService) {}

  public async findByEmail(email: string): Promise<UsersDTO | null> {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    })
  }
  public async create(user: UsersDTO): Promise<void> {
    await this.prisma.user.create({
      data: {
        ...user,
      },
    })
  }
}
