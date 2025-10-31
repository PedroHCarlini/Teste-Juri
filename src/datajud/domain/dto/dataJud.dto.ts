import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsArray,
  IsDate,
  IsMongoId,
} from 'class-validator';
import { Type } from 'class-transformer';

export class TotalDto {
  @IsNumber()
  @Type(() => Number)
  value!: number;

  @IsString()
  relation!: string;
}

export class ShardsDto {
  @IsNumber()
  @Type(() => Number)
  total!: number;

  @IsNumber()
  @Type(() => Number)
  successful!: number;

  @IsNumber()
  @Type(() => Number)
  skipped!: number;

  @IsNumber()
  @Type(() => Number)
  failed!: number;
}

export class ClasseDto {
  @IsNumber()
  @Type(() => Number)
  codigo!: number;

  @IsString()
  nome!: string;
}

export class SistemaDto {
  @IsNumber()
  @Type(() => Number)
  codigo!: number;

  @IsString()
  nome!: string;
}

export class FormatoDto {
  @IsNumber()
  @Type(() => Number)
  codigo!: number;

  @IsString()
  nome!: string;
}

export class ComplementoTabeladoDto {
  @IsNumber()
  @Type(() => Number)
  codigo!: number;

  @IsNumber()
  @Type(() => Number)
  valor!: number;

  @IsString()
  nome!: string;

  @IsString()
  descricao!: string;
}

export class MovimentoDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ComplementoTabeladoDto)
  complementosTabelados?: ComplementoTabeladoDto[];

  @IsNumber()
  @Type(() => Number)
  codigo!: number;

  @IsString()
  nome!: string;

  @IsDate()
  @Type(() => Date)
  dataHora!: Date;
}

export class AssuntoDto {
  @IsNumber()
  @Type(() => Number)
  codigo!: number;

  @IsString()
  nome!: string;
}

export class OrgaoJulgadorDto {
  @IsNumber()
  @Type(() => Number)
  codigoMunicipioIBGE!: number;

  @IsNumber()
  @Type(() => Number)
  codigo!: number;

  @IsString()
  nome!: string;
}

export class SourceDto {
  @ValidateNested()
  @Type(() => ClasseDto)
  classe!: ClasseDto;

  @ValidateNested()
  @Type(() => SistemaDto)
  sistema!: SistemaDto;

  @ValidateNested()
  @Type(() => FormatoDto)
  formato!: FormatoDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MovimentoDto)
  movimentos?: MovimentoDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AssuntoDto)
  assuntos?: AssuntoDto[];

  @ValidateNested()
  @Type(() => OrgaoJulgadorDto)
  orgaoJulgador!: OrgaoJulgadorDto;

  @IsString()
  numeroProcesso!: string;

  @IsString()
  tribunal!: string;

  @IsDate()
  @Type(() => Date)
  dataHoraUltimaAtualizacao!: Date;

  @IsString()
  grau!: string;

  @IsDate()
  @Type(() => Date)
  timestamp!: Date;

  @IsDate()
  @Type(() => Date)
  dataAjuizamento!: Date;

  @IsString()
  id!: string;

  @IsNumber()
  @Type(() => Number)
  nivelSigilo!: number;
}

export class HitsArrayDto {
  @IsString()
  _id!: string;

  @IsString()
  _index!: string;

  @IsNumber()
  @Type(() => Number)
  _score!: number;

  @ValidateNested()
  @Type(() => SourceDto)
  _source!: SourceDto;
}

export class HitsDto {
  @ValidateNested()
  @Type(() => TotalDto)
  total!: TotalDto;

  @IsNumber()
  @Type(() => Number)
  max_score!: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HitsArrayDto)
  hits?: HitsArrayDto[];
}

export class ProcessDto {
  @IsOptional()
  @IsMongoId()
  _id?: string;

  @IsNumber()
  @Type(() => Number)
  took!: number;

  @IsBoolean()
  @Type(() => Boolean)
  timed_out!: boolean;

  @ValidateNested()
  @Type(() => ShardsDto)
  _shards!: ShardsDto;

  @ValidateNested()
  @Type(() => HitsDto)
  hits!: HitsDto;
}
