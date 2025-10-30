import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessEntity } from 'src/entities/process.entity';
import { SearchProcessService } from './createProcess.service';
import { SearchProcessController } from './createProcess.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProcessEntity])],
  controllers: [SearchProcessController],
  providers: [SearchProcessService],
})
export class SearchProcessModule {}
