import { Module } from '@nestjs/common'
import { UploadModule } from './module/upload/upload.module'
import { PrismaModule } from './lib/prisma/prisma.module'
import { PostgresRepositoryModule } from './repositories/postgres/postgres-repository.module'
import { DownloadModule } from './module/download/download.module'

@Module({
  imports: [UploadModule, PrismaModule, PostgresRepositoryModule, DownloadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
