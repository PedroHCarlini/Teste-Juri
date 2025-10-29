import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export class Total {
  @Prop()
  value: number;

  @Prop()
  relation: string;
}

export class Shards {
  @Prop()
  total: number;

  @Prop()
  successful: number;

  @Prop()
  skipped: number;

  @Prop()
  failed: number;
}

export class Assunto {
  @Prop()
  codigo!: number;

  @Prop()
  nome!: string;
}

export class OrgaoJulgador {
  @Prop()
  codigoMunicipioIBGE!: number;

  @Prop()
  codigo!: number;

  @Prop()
  nome!: string;
}

export class ComplementoTabelado {
  @Prop()
  codigo!: number;

  @Prop()
  valor!: number;

  @Prop()
  nome!: string;

  @Prop()
  descricao!: string;
}

export class Movimento {
  @Prop({ type: () => [ComplementoTabelado] })
  complementosTabelados?: ComplementoTabelado[];

  @Prop()
  codigo!: number;

  @Prop()
  nome!: string;

  @Prop()
  dataHora!: Date;
}

export class Classe {
  @Prop()
  codigo: number;

  @Prop()
  nome: string;
}

export class Sistema {
  @Prop()
  codigo: number;

  @Prop()
  nome: string;
}

export class Formato {
  @Prop()
  codigo: number;

  @Prop()
  nome: string;
}

export class Source {
  @Prop({ type: Classe })
  classe: Classe;

  @Prop({ type: Sistema })
  sistema: Sistema;

  @Prop({ type: Formato })
  formato: Formato;

  @Prop({ type: () => [Movimento] })
  movimentos!: Movimento[];

  @Prop({ type: [Assunto], default: [] })
  assuntos!: Assunto[];

  @Prop({ type: OrgaoJulgador })
  orgaoJulgador: OrgaoJulgador;

  @Prop()
  numeroProcesso: string;

  @Prop()
  tribunal: string;

  @Prop()
  dataHoraUltimaAtualizacao: Date;

  @Prop()
  grau: string;

  @Prop()
  '@timestamp': Date;

  @Prop()
  dataAjuizamento: Date;

  @Prop()
  id: string;

  @Prop()
  nivelSigilo: number;
}

export class HitsArray {
  @Prop()
  _id: string;

  @Prop()
  _index: string;

  @Prop()
  _score: number;

  @Prop({ type: Source })
  _source: Source;
}

export class Hits {
  @Prop({ type: Total })
  total: Total;

  @Prop()
  max_score: number;
}

@Schema({ collection: 'processes' })
export class ProcessEntity extends Document {
  @Prop()
  took: number;

  @Prop()
  timed_out: boolean;

  @Prop({ type: Shards })
  _shards: Shards;

  @Prop({ type: Hits })
  hits: Hits;
}
