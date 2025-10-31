import axios from 'axios';

import { Inject, Injectable } from '@nestjs/common';
import { ProcessEntity } from '../infra/models/entities/process.entity';
import { DataJudProducerService } from 'src/kafka/datajud.producer.service';

import type { IDataJudRepository } from '../domain/repositories/dataJud.interface.repository';

@Injectable()
export class DatajudUsecase {
  constructor(
    @Inject('IDataJudRepository')
    private readonly dataJudRepository: IDataJudRepository,
    private readonly dataJudProducerService: DataJudProducerService,
  ) {}

  async handler(processNumber: string): Promise<ProcessEntity[] | string> {
    try {
      const processes = await this.dataJudRepository.search(processNumber);

      if (processes.length > 0) return processes;

      const url = process.env.DATAJUD_URL;
      const apiKey = process.env.DATAJUD_API_KEY;

      if (!url) {
        throw new Error('DATAJUD_URL is not defined in environment variables');
      }

      if (!url) {
        throw new Error(
          'DATAJUD_API_KEY is not defined in environment variables',
        );
      }

      const res = await axios.post(
        url,
        {
          query: {
            match: {
              numeroProcesso: processNumber,
            },
          },
          size: 10,
        },
        { headers: { Authorization: apiKey } },
      );

      const message = res.data;

      await this.dataJudProducerService.sendMessage('datajud-queue', message);

      return 'Hello World!';
    } catch (error) {
      console.error('Error fetching data from Datajud API:', error);
      throw error;
    }
  }
}
