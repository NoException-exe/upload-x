import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../lib/prisma/prisma.service'
import { FilesRepositoryDTO } from './dto/filesRepositoryDTO'
import { IPostgresFilesRepository } from './interface/postgres-files-repository.interface'

@Injectable()
export class PostgresFilesRepositoryService implements IPostgresFilesRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findFile(id: string): Promise<FilesRepositoryDTO | null> {
    return await this.prisma.files.findUnique({
      where: {
        reference_code: id,
      },
    })
  }

  async create(data: FilesRepositoryDTO): Promise<FilesRepositoryDTO> {
    return await this.prisma.files.create({
      data: {
        ...data,
      },
    })
  }
}
