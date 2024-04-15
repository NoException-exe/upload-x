import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../lib/prisma/prisma.service'
import { FilesDTO } from './dto/FilesDTO'
import { IPostgresFilesRepository } from './interface/postgres-files-repository.interface'

@Injectable()
export class PostgresFilesRepositoryService implements IPostgresFilesRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findFile(id: string): Promise<FilesDTO | null> {
    return await this.prisma.files.findUnique({
      where: {
        reference_code: id,
      },
    })
  }

  async create(data: FilesDTO): Promise<FilesDTO> {
    return await this.prisma.files.create({
      data: {
        ...data,
      },
    })
  }
}
