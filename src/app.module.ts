import { Module } from '@nestjs/common'
import { UploadModule } from './upload/upload.module'
import { PrismaModule } from './prisma/prisma.module'
import { PostgresRepositoryModule } from './repositories/postgres/postgres-repository.module'

@Module({
  imports: [UploadModule, PrismaModule, PostgresRepositoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
