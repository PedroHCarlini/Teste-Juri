import { Controller, Get, Query } from '@nestjs/common';
import { DatajudUsecase } from './usecases/datajud.usecase';

@Controller('search-process')
export class DatajudController {
  constructor(private readonly datajudUsecase: DatajudUsecase) {}

  @Get()
  searchProcess(@Query() query: any): any {
    const processNumber = query.processNumber;
    return this.datajudUsecase.handler(processNumber);
  }
}
