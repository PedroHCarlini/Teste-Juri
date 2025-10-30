import { Injectable } from '@nestjs/common';
import type { IProcessRepository } from '../domain/repositories/process.interface.repository';
import { ProcessEntity } from 'src/entities/process.entity';

@Injectable()
export class SearchProcessService {
  constructor(private readonly processRepository: IProcessRepository) {}

  async handler(): Promise<ProcessEntity[]> {
    const processes = await this.processRepository.search({});

    if (processes.length > 0) return processes;

    return [];
  }
}
