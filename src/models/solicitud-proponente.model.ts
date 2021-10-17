import {Entity, model, property} from '@loopback/repository';

@model()
export class SolicitudProponente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  idCedulaProponente?: string;

  @property({
    type: 'string',
  })
  idSolicitud?: string;

  constructor(data?: Partial<SolicitudProponente>) {
    super(data);
  }
}

export interface SolicitudProponenteRelations {
  // describe navigational properties here
}

export type SolicitudProponenteWithRelations = SolicitudProponente & SolicitudProponenteRelations;
