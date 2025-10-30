import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

export class Total {
  @Column()
  value: number;

  @Column()
  relation: string;
}

export class Shards {
  @Column()
  total: number;

  @Column()
  successful: number;

  @Column()
  skipped: number;

  @Column()
  failed: number;
}
export class Classe {
  @Column()
  codigo: number;

  @Column()
  nome: string;
}

export class Sistema {
  @Column()
  codigo: number;

  @Column()
  nome: string;
}

export class Formato {
  @Column()
  codigo: number;

  @Column()
  nome: string;
}

export class Movimento {
  @Column('simple-json', { nullable: true })
  complementosTabelados?: ComplementoTabelado[];

  @Column()
  codigo: number;

  @Column()
  nome: string;

  @Column()
  dataHora: Date;
}

export class ComplementoTabelado {
  @Column()
  codigo: number;

  @Column()
  valor: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;
}

export class Assunto {
  @Column()
  codigo: number;

  @Column()
  nome: string;
}

export class OrgaoJulgador {
  @Column()
  codigoMunicipioIBGE: number;

  @Column()
  codigo: number;

  @Column()
  nome: string;
}
export class Source {
  @Column(() => Classe)
  classe: Classe;

  @Column(() => Sistema)
  sistema: Sistema;

  @Column(() => Formato)
  formato: Formato;

  @Column('simple-json', { nullable: true })
  movimentos: Movimento[];

  @Column('simple-json', { nullable: true })
  assuntos: Assunto[];

  @Column(() => OrgaoJulgador)
  orgaoJulgador: OrgaoJulgador;

  @Column()
  numeroProcesso: string;

  @Column()
  tribunal: string;

  @Column()
  dataHoraUltimaAtualizacao: Date;

  @Column()
  grau: string;

  @Column()
  timestamp: Date;

  @Column()
  dataAjuizamento: Date;

  @Column()
  id: string;

  @Column()
  nivelSigilo: number;
}

export class HitsArray {
  @Column()
  _id: string;

  @Column()
  _index: string;

  @Column()
  _score: number;

  @Column(() => Source)
  _source: Source;
}

export class Hits {
  @Column(() => Total)
  total: Total;

  @Column()
  max_score: number;

  @Column('simple-json', { nullable: true })
  hits?: HitsArray[];
}

@Entity('processes')
export class ProcessEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  took: number;

  @Column()
  timed_out: boolean;

  @Column(() => Shards)
  _shards: Shards;

  @Column(() => Hits)
  hits: Hits;
}
