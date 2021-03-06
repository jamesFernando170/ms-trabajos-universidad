import {Entity, model, property} from '@loopback/repository';

@model()
export class TiposComite extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idTipoComite?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<TiposComite>) {
    super(data);
  }
}

export interface TiposComiteRelations {
  // describe navigational properties here
}

export type TiposComiteWithRelations = TiposComite & TiposComiteRelations;
