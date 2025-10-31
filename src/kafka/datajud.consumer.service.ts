import { Controller, Inject, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import type { IDataJudRepository } from 'src/datajud/domain/repositories/dataJud.interface.repository';

@Controller()
export class DatajudConsumer {
  private readonly logger = new Logger(DatajudConsumer.name);

  constructor(
    @Inject('IDataJudRepository')
    private readonly dataJudRepository: IDataJudRepository,
  ) {}

  @MessagePattern('datajud-response')
  async consume(@Payload() message: any) {
    this.logger.log('Menssage recived from Kafka:');
    this.logger.debug(JSON.stringify(message.value, null, 2));

    const res = await this.dataJudRepository.create(message.value);
    this.logger.log('Data saved to database:');
    this.logger.debug(JSON.stringify(res, null, 2));

    const data = JSON.parse(message.value);
    this.logger.log(`Processando ${data.length || 1} resultados do DataJud`);
  }
}
