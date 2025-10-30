import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProcessRepository } from 'src/process/domain/repositories/process.interface.repository';
import { ProcessEntity } from 'src/entities/process.entity';

@Injectable()
export class ProcessRepositoryMongo implements IProcessRepository {
  constructor(
    @InjectModel(ProcessEntity.name)
    private readonly processModel: Model<ProcessEntity>,
  ) {}

  async create(data: Partial<ProcessEntity>): Promise<ProcessEntity> {
    const createdUser = new this.processModel(data);
    return createdUser.save();
  }

  async search(): Promise<ProcessEntity[]> {
    return this.processModel.find().exec();
  }
}
