import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class EstadoSolicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idEstadoSolicitud?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @hasMany(() => Solicitud, {keyTo: 'idEstadoSolicitud'})
  solicituds: Solicitud[];

  constructor(data?: Partial<EstadoSolicitud>) {
    super(data);
  }
}

export interface EstadoSolicitudRelations {
  // describe navigational properties here
}

export type EstadoSolicitudWithRelations = EstadoSolicitud & EstadoSolicitudRelations;
