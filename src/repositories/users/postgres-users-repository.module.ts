import { Module } from '@nestjs/common'
import { PostgresUsersRepositoryService } from './postgres-users-repository.service'
import { PrismaModule } from 'src/lib/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [PostgresUsersRepositoryService],
  exports: [PostgresUsersRepositoryService],
})
export class PostgresUsersRepositoryModule {}
