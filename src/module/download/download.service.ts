import * as fs from 'fs'
import * as path from 'path'

import { Injectable, NotFoundException } from '@nestjs/common'
import { PostgresRepositoryService } from '../../repositories/postgres/postgres-repository.service'
import { Response } from 'express'

@Injectable()
export class DownloadService {
  constructor(private readonly postgresRepository: PostgresRepositoryService) {}

  private readonly downloadFolder = './uploads'

  async download(param: string, res: Response) {
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
