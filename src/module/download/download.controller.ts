import { Controller, Get, Param, Res } from '@nestjs/common'
import { DownloadService } from './download.service'
import { Response } from 'express'

@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}

  @Get(':id')
  async downloadFile(@Param('id') id: string, @Res() res: Response) {
    await this.downloadService.download(id, res)
  }
}
