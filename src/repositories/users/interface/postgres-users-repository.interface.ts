import { UsersDTO } from '../dto/UsersDTO'

export interface IPostgresUsersRepository {
  find(email: string): Promise<UsersDTO | null>
  create(user: UsersDTO): Promise<void>
}
