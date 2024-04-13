import { Module } from '@nestjs/common'
import { PostgresRepositoryService } from './postgres-repository.service'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [PostgresRepositoryService],
  exports: [PostgresRepositoryService],
})
export class PostgresRepositoryModule {}
