import { ProcessEntity } from 'src/entities/process.entity';

export interface IProcessRepository {
  create(data: Partial<ProcessEntity>): Promise<ProcessEntity>;
  search(data: any): Promise<ProcessEntity[]>;
}
