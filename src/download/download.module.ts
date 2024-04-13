import { Module } from '@nestjs/common'
import { DownloadService } from './download.service'
import { DownloadController } from './download.controller'
import { PostgresRepositoryModule } from '../repositories/postgres/postgres-repository.module'

@Module({
  imports: [PostgresRepositoryModule],
  controllers: [DownloadController],
  providers: [DownloadService],
})
export class DownloadModule {}
