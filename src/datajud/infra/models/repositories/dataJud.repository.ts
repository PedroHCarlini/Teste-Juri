import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IDataJudRepository } from 'src/datajud/domain/repositories/dataJud.interface.repository';
import { ProcessEntity } from 'src/datajud/infra/models/entities/process.entity';
import { MongoRepository } from 'typeorm';

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
      processNumber,
    });
  }
}
