import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { PostgresUsersRepositoryModule } from 'src/repositories/users/postgres-users-repository.module'

@Module({
  imports: [PostgresUsersRepositoryModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
