import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/models/auth/infra/guards/jwt-auth.guard';
import { DatajudUsecase } from './usecases/datajud.usecase';
import { SearchProcessDto } from './domain/dto/datajud.dto';

@Controller('search-process')
export class DatajudController {
  constructor(private readonly datajudUsecase: DatajudUsecase) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiQuery({
    name: 'processNumber',
    type: String,
    required: true,
    description: 'Case number to be consulted',
  })
  async searchProcess(@Query() query: SearchProcessDto) {
    return this.datajudUsecase.handler(query.processNumber);
  }
}
