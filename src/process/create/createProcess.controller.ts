import { Controller, Get } from '@nestjs/common';
import { SearchProcessService } from './createProcess.service';

@Controller('search')
export class SearchProcessController {
  constructor(private readonly datajudService: SearchProcessService) {}

  // @Get()
  // searchProcess(): string {
  //   return this.datajudService.getHello();
  // }
}
