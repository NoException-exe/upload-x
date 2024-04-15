import { Module } from '@nestjs/common'
import { PostgresFilesRepositoryService } from './postgres-files-repository.service'
import { PrismaModule } from '../../lib/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [PostgresFilesRepositoryService],
  exports: [PostgresFilesRepositoryService],
})
export class PostgresFilesRepositoryModule {}
