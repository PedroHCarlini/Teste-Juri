import { Module } from '@nestjs/common';
import { DatajudController } from './datajud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessEntity } from 'src/datajud/infra/models/entities/process.entity';
import { DatajudUsecase } from './usecases/datajud.usecase';
import { DataJudRepositoryMongo } from './infra/models/repositories/dataJud.repository';
import { KafkaProducerService } from 'src/kafka/kafka-producer.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProcessEntity])],
  controllers: [DatajudController],
  providers: [
    {
      provide: 'IDataJudRepository',
      useClass: DataJudRepositoryMongo,
    },
    DatajudUsecase,
    KafkaProducerService,
  ],
  exports: ['IDataJudRepository', DatajudUsecase],
})
export class DatajudModule {}
