import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchProcessService {
  constructor(private readonly) {}

  getHello(): string {
    return 'Hello World!';
  }
}
