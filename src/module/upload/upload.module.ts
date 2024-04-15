import { Module } from '@nestjs/common'
import { UploadService } from './upload.service'
import { UploadController } from './upload.controller'
import { PostgresFilesRepositoryModule } from '../../repositories/files/postgres-files-repository.module'

@Module({
  imports: [PostgresFilesRepositoryModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
