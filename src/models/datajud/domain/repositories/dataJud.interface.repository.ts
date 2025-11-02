import { ProcessEntity } from 'src/models/datajud/infra/models/entities/process.entity';

export interface IDataJudRepository {
  create(data: Partial<ProcessEntity>): Promise<ProcessEntity>;
  search(data: string): Promise<ProcessEntity[]>;
}
