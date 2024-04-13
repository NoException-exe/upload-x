import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { PostgresDTO } from './dto/postgresDTO'

@Injectable()
export class PostgresRepositoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: PostgresDTO) {
    return await this.prisma.files.create({
      data: {
        ...data,
      },
    })
  }
}
