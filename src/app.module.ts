import { Module } from '@nestjs/common'
import { UploadModule } from './module/upload/upload.module'
import { PrismaModule } from './lib/prisma/prisma.module'
import { PostgresFilesRepositoryModule } from './repositories/files/postgres-files-repository.module'
import { DownloadModule } from './module/download/download.module'

@Module({
  imports: [UploadModule, PrismaModule, PostgresFilesRepositoryModule, DownloadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
