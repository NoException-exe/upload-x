import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'

import { Injectable } from '@nestjs/common'
import { FileDTO } from './dto/fileDto'
import { PostgresFilesRepositoryService } from '../../repositories/files/postgres-files-repository.service'
import { FilesRepositoryDTO } from 'src/repositories/files/dto/filesRepositoryDTO'

@Injectable()
export class UploadService {
  constructor(private readonly postgresRepository: PostgresFilesRepositoryService) {}

  private readonly uploadFolder = './uploads'

  async uploadFile(file: FileDTO): Promise<{ url: string }> {
    const { buffer, mimetype, originalname } = file

    const fileName = `${Date.now()}-${originalname}`

    await this.saveFile(fileName, buffer)

    const data: FilesRepositoryDTO = {
      saved_name: fileName,
      extension_name: mimetype,
      original_name: originalname,
      reference_code: this.genRefCode(10),
    }

    await this.postgresRepository.create(data)

    return {
      url: process.env.BASE_URL + `/${data.reference_code}`,
    }
  }

  private async saveFile(fileName: string, fileBuffer: Buffer): Promise<string> {
    const filePath = path.join(this.uploadFolder, fileName)

    if (!fs.existsSync(this.uploadFolder)) {
      fs.mkdirSync(this.uploadFolder, { recursive: true })
    }

    fs.writeFileSync(filePath, fileBuffer)

    return filePath
  }

  private genRefCode(length: number): string {
    return crypto.randomBytes(length).toString('hex')
  }
}
