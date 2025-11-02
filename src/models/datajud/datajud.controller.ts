import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/models/auth/jwt-auth.guard';
import { DatajudUsecase } from './usecases/datajud.usecase';

@Controller('search-process')
export class DatajudController {
  constructor(private readonly datajudUsecase: DatajudUsecase) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  searchProcess(@Query() query: any): any {
    const processNumber = query.processNumber;
    return this.datajudUsecase.handler(processNumber);
  }
}
