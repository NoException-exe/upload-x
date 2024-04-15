import { Controller, Get, Param, Res } from '@nestjs/common'
import { DownloadService } from './download.service'
import { Response } from 'express'

@Controller('download')
export class DownloadController {
  public constructor(private readonly downloadService: DownloadService) {}

  @Get(':id')
  public async downloadFile(@Param('id') id: string, @Res() res: Response): Promise<void> {
    await this.downloadService.download(id, res)
  }
}
