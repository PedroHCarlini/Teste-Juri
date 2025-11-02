import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SearchProcessDto {
  @ApiProperty({
    description: 'Process number to be searched',
    example: '00105765620225150093',
  })
  @IsString()
  @IsNotEmpty()
  processNumber: string;
}
