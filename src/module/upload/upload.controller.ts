import { Controller, Post, UploadedFile, UseInterceptors, UsePipes } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { UploadService } from './upload.service'
import { FileDTO } from './dto/fileDto'
import { MulterValidator } from './validator/multer.validator'
import { ApiBody, ApiConsumes } from '@nestjs/swagger'

@Controller('upload')
export class UploadController {
  public constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(new MulterValidator())
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  public async uploadFile(@UploadedFile() file: FileDTO): Promise<{
    url: string
  }> {
    const response = await this.uploadService.uploadFile(file)

    return {
      url: response.url,
    }
  }
}
