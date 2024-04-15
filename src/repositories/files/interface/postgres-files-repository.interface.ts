import { FilesRepositoryDTO } from '../dto/filesRepositoryDTO'

export interface IPostgresFilesRepository {
  create(data: FilesRepositoryDTO): Promise<FilesRepositoryDTO>
  findFile(id: string): Promise<FilesRepositoryDTO | null>
}
