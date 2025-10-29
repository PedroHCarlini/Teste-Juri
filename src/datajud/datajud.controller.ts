import { Controller, Get } from '@nestjs/common';
import { DatajudService } from './datajud.service';

@Controller('a')
export class DatajudController {
  constructor(private readonly datajudService: DatajudService) {}

  @Get()
  searchProcess(): any {
    return this.datajudService.getHello({
      query: {
        match: {
          numeroProcesso: '00105765620225150093',
        },
      },
      size: 10,
    });
  }
}
