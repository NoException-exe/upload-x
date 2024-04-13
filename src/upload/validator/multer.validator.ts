import { PipeTransform } from '@nestjs/common'
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception'
import { FileDTO } from '../dto/fileDto'

export class MulterValidator implements PipeTransform<FileDTO> {
  private readonly allowedTypes = ['application/zip']
  private readonly maxSize = 50 * 1024 * 1024 // 50 MB

  transform(file: FileDTO) {
    if (!file) {
      throw new BadRequestException('You need send a file')
    }

    if (file.size > this.maxSize) {
      throw new BadRequestException('File size too large. Max size is 50MB')
    }

    if (!this.allowedTypes.includes(file.mimetype)) {
      throw new BadRequestException('Invalid file type. Only zip files are allowed')
    }

    return file
  }
}
