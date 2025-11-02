import { MongoRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { IDeadLetterRepository } from 'src/models/deadLetter/domain/repositories/deadLetter.interface.repository';
import { DeadLetterEntity } from '../entities/deadLetter.entity';

@Injectable()
export class DeadLetterRepositoryMongo implements IDeadLetterRepository {
  constructor(
    @InjectRepository(DeadLetterEntity)
    private readonly deadLetterRepository: MongoRepository<DeadLetterEntity>,
  ) {}

  async create(data: Partial<DeadLetterEntity>): Promise<DeadLetterEntity> {
    const created = this.deadLetterRepository.create(data);
    return await this.deadLetterRepository.save(created);
  }
}
