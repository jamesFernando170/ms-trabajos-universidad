import {Entity, model, property, hasMany} from '@loopback/repository';
import {Recordatorio} from './recordatorio.model';
import {ResultadoInvitacion} from './resultado-invitacion.model';

@model()
export class InvitacionEvaluar extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idInvitacionEvaluar?: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaRespuesta: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoInvitacion: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
  })
  idJurado?: number;

  @hasMany(() => Recordatorio, {keyTo: 'idInvitacionEvaluar'})
  recordatorios: Recordatorio[];

  @hasMany(() => ResultadoInvitacion, {keyTo: 'idInvitacionEvaluar'})
  resultadoInvitacions: ResultadoInvitacion[];

  constructor(data?: Partial<InvitacionEvaluar>) {
    super(data);
  }
}

export interface InvitacionEvaluarRelations {
  // describe navigational properties here
}

export type InvitacionEvaluarWithRelations = InvitacionEvaluar & InvitacionEvaluarRelations;
