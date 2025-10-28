import { Module } from '@nestjs/common';
import { DatajudController } from './datajud.controller';
import { DatajudService } from './datajud.service';

@Module({
  imports: [],
  controllers: [DatajudController],
  providers: [DatajudService],
})
export class DatajudModule {}
