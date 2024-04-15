import { Module } from '@nestjs/common'
import { UploadModule } from './module/upload/upload.module'
import { PrismaModule } from './lib/prisma/prisma.module'
import { PostgresFilesRepositoryModule } from './repositories/files/postgres-files-repository.module'
import { DownloadModule } from './module/download/download.module'
import { PostgresUsersRepositoryModule } from './repositories/users/postgres-users-repository.module'
import { UserModule } from './module/user/user.module'

@Module({
  imports: [
    UploadModule,
    PrismaModule,
    PostgresFilesRepositoryModule,
    DownloadModule,
    PostgresUsersRepositoryModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
