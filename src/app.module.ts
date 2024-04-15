import { Module } from '@nestjs/common'
import { UploadModule } from './module/upload/upload.module'
import { PrismaModule } from './lib/prisma/prisma.module'
import { PostgresFilesRepositoryModule } from './repositories/files/postgres-files-repository.module'
import { DownloadModule } from './module/download/download.module'
import { PostgresUsersRepositoryModule } from './repositories/users/postgres-users-repository.module'
import { UserModule } from './module/user/user.module'
import { AuthModule } from './module/auth/auth.module'
import { AppService } from './app.service'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './module/auth/guards/jwt-auth-guard'

@Module({
  imports: [
    UploadModule,
    PrismaModule,
    PostgresFilesRepositoryModule,
    DownloadModule,
    PostgresUsersRepositoryModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
