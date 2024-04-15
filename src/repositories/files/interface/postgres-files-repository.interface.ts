import { FilesDTO } from '../dto/FilesDTO'

export interface IPostgresFilesRepository {
  create(data: FilesDTO): Promise<FilesDTO>
  findFile(id: string): Promise<FilesDTO | null>
}
