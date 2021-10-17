import {Entity, model, property} from '@loopback/repository';

@model()
export class JuradoAreaInvestigacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  idJurado?: number;

  @property({
    type: 'string',
  })
  idAreaInvestigacion?: string;

  constructor(data?: Partial<JuradoAreaInvestigacion>) {
    super(data);
  }
}

export interface JuradoAreaInvestigacionRelations {
  // describe navigational properties here
}

export type JuradoAreaInvestigacionWithRelations = JuradoAreaInvestigacion & JuradoAreaInvestigacionRelations;
