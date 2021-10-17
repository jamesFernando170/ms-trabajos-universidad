import {Entity, model, property} from '@loopback/repository';

@model()
export class ResultadoInvitacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idResultadoInvitacion?: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  formatoDiligenciado: string;

  @property({
    type: 'number',
  })
  idInvitacionEvaluar?: number;

  constructor(data?: Partial<ResultadoInvitacion>) {
    super(data);
  }
}

export interface ResultadoInvitacionRelations {
  // describe navigational properties here
}

export type ResultadoInvitacionWithRelations = ResultadoInvitacion & ResultadoInvitacionRelations;
