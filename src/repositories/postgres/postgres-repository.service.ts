import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../lib/prisma/prisma.service'
import { PostgresDTO } from './dto/postgresDTO'
import { IPostgresRepository } from './postgres-repository.interface'

@Injectable()
export class PostgresRepositoryService implements IPostgresRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findFile(id: string): Promise<PostgresDTO | null> {
    return await this.prisma.files.findUnique({
      where: {
        reference_code: id,
      },
    })
  }

  async create(data: PostgresDTO): Promise<PostgresDTO> {
    return await this.prisma.files.create({
      data: {
        ...data,
      },
    })
  }
}
