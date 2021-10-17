import {Entity, model, property, hasMany} from '@loopback/repository';
import {TiposComite} from './tipos-comite.model';
import {SolicitudComite} from './solicitud-comite.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idSolicitud?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreTrabajo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
  })
  idTipoSolicitud?: number;

  @property({
    type: 'string',
  })
  idEstadoSolicitud?: string;

  @hasMany(() => TiposComite, {through: {model: () => SolicitudComite, keyFrom: 'idSolicitud', keyTo: 'idTipoComite'}})
  tiposComites: TiposComite[];

  @property({
    type: 'string',
  })
  idModalidad?: string;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
