import { Module } from '@nestjs/common';
import { DatajudController } from './datajud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessEntity } from 'src/datajud/infra/models/entities/process.entity';
import { DatajudUsecase } from './usecases/datajud.usecase';
import { DataJudRepositoryMongo } from './infra/models/repositories/dataJud.repository';
import { DataJudProducerService } from 'src/kafka/datajud.producer.service';
import { DatajudConsumer } from 'src/kafka/datajud.consumer.service';
import { DeadLetterRepositoryMongo } from 'src/deadLetter/infra/models/repositories/deadLetter.repository';
import { DeadLetterEntity } from 'src/deadLetter/infra/models/entities/deadLetter.entity';

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
