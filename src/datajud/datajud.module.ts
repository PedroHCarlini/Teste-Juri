import { Module } from '@nestjs/common';
import { DatajudController } from './datajud.controller';
import { DatajudService } from './datajud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessEntity } from 'src/entities/process.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProcessEntity])],
  controllers: [DatajudController],
  providers: [DatajudService],
})
export class DatajudModule {}
