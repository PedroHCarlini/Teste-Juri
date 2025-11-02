import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SearchProcessDto {
  @ApiProperty({
    description: 'Número do processo',
    example: '08012345620218260100',
  })
  @IsString()
  @IsNotEmpty()
  processNumber: string;
}
