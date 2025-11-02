import { MongoRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProcessEntity } from 'src/models/datajud/infra/models/entities/process.entity';
import { IDataJudRepository } from 'src/models/datajud/domain/repositories/dataJud.interface.repository';

@Injectable()
export class DataJudRepositoryMongo implements IDataJudRepository {
  constructor(
    @InjectRepository(ProcessEntity)
    private readonly dataJudRepository: MongoRepository<ProcessEntity>,
  ) {}

  async create(data: Partial<ProcessEntity>): Promise<ProcessEntity> {
    const created = this.dataJudRepository.create(data);
    return await this.dataJudRepository.save(created);
  }

  async search(processNumber: string): Promise<ProcessEntity[]> {
    return await this.dataJudRepository.find({
      where: {
        'hits.hits._source.numeroProcesso': processNumber,
      },
    });
  }
}
