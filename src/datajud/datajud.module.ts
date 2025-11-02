import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatajudController } from './datajud.controller';
import { DatajudUsecase } from './usecases/datajud.usecase';
import { DatajudConsumer } from 'src/kafka/datajud.consumer.service';
import { DataJudProducerService } from 'src/kafka/datajud.producer.service';
import { ProcessEntity } from 'src/datajud/infra/models/entities/process.entity';
import { DataJudRepositoryMongo } from './infra/models/repositories/dataJud.repository';
import { DeadLetterEntity } from 'src/deadLetter/infra/models/entities/deadLetter.entity';
import { DeadLetterRepositoryMongo } from 'src/deadLetter/infra/models/repositories/deadLetter.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProcessEntity, DeadLetterEntity])],
  controllers: [DatajudController, DatajudConsumer],
  providers: [
    {
      provide: 'IDataJudRepository',
      useClass: DataJudRepositoryMongo,
    },
    {
      provide: 'IDeadLetterRepository',
      useClass: DeadLetterRepositoryMongo,
    },
    DatajudUsecase,
    DataJudProducerService,
  ],
  exports: ['IDataJudRepository', DatajudUsecase],
})
export class DatajudModule {}
