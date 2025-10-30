// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { IDataJudRepository } from 'src/datajud/domain/repositories/dataJud.interface.repository';
// import { ProcessEntity } from 'src/datajud/infra/models/entities/process.entity';

// @Injectable()
// export class DataJudRepositoryMongo implements IDataJudRepository {
//   constructor(
//     @InjectModel(ProcessEntity.name)
//     private readonly processModel: Model<ProcessEntity>,
//   ) {}

//   async create(data: Partial<ProcessEntity>): Promise<ProcessEntity> {
//     const createdUser = new this.processModel(data);
//     return createdUser.save();
//   }

//   async search(): Promise<ProcessEntity[]> {
//     return this.processModel.find().exec();
//   }
// }
