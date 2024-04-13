import { PostgresDTO } from './dto/postgresDTO'

export interface IPostgresRepository {
  create(data: PostgresDTO): Promise<PostgresDTO>
  findFile(id: string): Promise<PostgresDTO | null>
}
