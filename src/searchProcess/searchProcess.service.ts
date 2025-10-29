import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchProcessService {
  constructor() {}

  getHello(): string {
    return 'Hello World!';
  }
}
