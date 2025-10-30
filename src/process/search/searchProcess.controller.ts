import { Controller, Get } from '@nestjs/common';
import { SearchProcessService } from './searchProcess.service';
import { ProcessEntity } from 'src/entities/process.entity';

@Controller('search')
export class SearchProcessController {
  constructor(private readonly searchProcessService: SearchProcessService) {}

  @Get()
  searchProcess(): Promise<ProcessEntity[]> {
    return this.searchProcessService.handler();
  }
}
