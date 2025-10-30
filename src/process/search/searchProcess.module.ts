import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessEntity } from 'src/entities/process.entity';
import { SearchProcessService } from './searchProcess.service';
import { SearchProcessController } from './searchProcess.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProcessEntity])],
  controllers: [SearchProcessController],
  providers: [SearchProcessService],
})
export class SearchProcessModule {}
