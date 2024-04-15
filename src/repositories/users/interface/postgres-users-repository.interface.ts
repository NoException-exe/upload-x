import { UsersDTO } from '../dto/UsersDTO'

export interface IPostgresUsersRepository {
  findByEmail(email: string): Promise<UsersDTO | null>
  create(user: UsersDTO): Promise<void>
}
