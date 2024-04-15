import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception'
import { PipeTransform } from '@nestjs/common'

import { FileDTO } from '../dto/fileDto'
import * as data from '../../../../app.config.json'

export class MulterValidator implements PipeTransform<FileDTO> {
  private readonly allowedTypes = data.allowedTypes
  private readonly maxSize = data.maxSize * 1024 * 1024 // calculate max size in megabytes

  public transform(file: FileDTO): FileDTO {
    if (!file) {
      throw new BadRequestException('You need send a file')
    }

    if (file.size > this.maxSize) {
      throw new BadRequestException('File size too large. Max size is 50MB')
    }

    if (!this.allowedTypes.includes(file.mimetype)) {
      throw new BadRequestException(`Invalid file type. Only [${data.allowedTypes.map((name) => name)}] are allowed`)
    }

    return file
  }
}
