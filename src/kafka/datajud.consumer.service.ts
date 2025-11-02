import { Controller, Inject, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { ProcessEntity } from 'src/datajud/infra/models/entities/process.entity';
import { DeadLetterEntity } from 'src/deadLetter/infra/models/entities/deadLetter.entity';

import type { IDeadLetterRepository } from 'src/deadLetter/domain/repositories/deadLetter.interface.repository';
import type { IDataJudRepository } from 'src/datajud/domain/repositories/dataJud.interface.repository';

@Controller()
export class DatajudConsumer {
  private readonly logger = new Logger(DatajudConsumer.name);

  constructor(
    @Inject('IDataJudRepository')
    private readonly dataJudRepository: IDataJudRepository,

    @Inject('IDeadLetterRepository')
    private readonly deadLetterRepository: IDeadLetterRepository,
  ) {}

  @MessagePattern('datajud-queue')
  async consume(@Payload() message: any) {
    try {
      this.logger.log('Menssage recived from Kafka: ', message);

      const process = new ProcessEntity(message);

      await this.dataJudRepository.create(process);
      this.logger.log('Data saved to database');
    } catch (error) {
      this.logger.error('Error processing Kafka message', error);
      const errorMessage = JSON.stringify(error);

      const deadLetter = new DeadLetterEntity({
        error: errorMessage,
        message: message as ProcessEntity,
      });

      await this.deadLetterRepository.create(deadLetter);
    }
  }
}
