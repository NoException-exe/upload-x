import { Module } from '@nestjs/common'
import { UploadService } from './upload.service'
import { UploadController } from './upload.controller'
import { PostgresRepositoryModule } from '../../repositories/postgres/postgres-repository.module'

@Module({
  imports: [PostgresRepositoryModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
