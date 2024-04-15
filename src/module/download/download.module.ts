import { Module } from '@nestjs/common'
import { DownloadService } from './download.service'
import { DownloadController } from './download.controller'
import { PostgresFilesRepositoryModule } from '../../repositories/files/postgres-files-repository.module'

@Module({
  imports: [PostgresFilesRepositoryModule],
  controllers: [DownloadController],
  providers: [DownloadService],
})
export class DownloadModule {}
