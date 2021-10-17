import {Entity, model, property} from '@loopback/repository';

@model()
export class AreaInvestigacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idAreaInvestigacion?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<AreaInvestigacion>) {
    super(data);
  }
}

export interface AreaInvestigacionRelations {
  // describe navigational properties here
}

export type AreaInvestigacionWithRelations = AreaInvestigacion & AreaInvestigacionRelations;
