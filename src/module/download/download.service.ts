import * as fs from 'fs'
import * as path from 'path'

import { Injectable, NotFoundException } from '@nestjs/common'
import { PostgresFilesRepositoryService } from '../../repositories/files/postgres-files-repository.service'
import { Response } from 'express'

@Injectable()
export class DownloadService {
  public constructor(private readonly postgresRepository: PostgresFilesRepositoryService) {}

  private readonly downloadFolder = './uploads'

  public async download(param: string, res: Response): Promise<void> {
    const findFile = await this.postgresRepository.findFile(param)

    if (!findFile) {
      throw new NotFoundException('Invalid link or file not found')
    }

    const filePath = path.join(this.downloadFolder, findFile.saved_name)

    if (!fs.existsSync(filePath)) {
      throw new NotFoundException('file not found')
    }

    res.setHeader('Content-Disposition', `attachment; filename=${findFile.original_name}`)
    res.setHeader('Content-Type', `${findFile.extension_name}`)

    const fileStream = fs.createReadStream(filePath)

    fileStream.pipe(res)
  }
}
