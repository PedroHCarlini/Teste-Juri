import { DeadLetterEntity } from 'src/models/deadLetter/infra/models/entities/deadLetter.entity';

export interface IDeadLetterRepository {
  create(data: Partial<DeadLetterEntity>): Promise<DeadLetterEntity>;
}
