import { Controller, Get } from '@nestjs/common';
import { SearchProcessService } from './searchProcess.service';

@Controller('search')
export class SearchProcessController {
  constructor(private readonly datajudService: SearchProcessService) {}

  @Get()
  searchProcess(): string {
    return this.datajudService.getHello();
  }
}
