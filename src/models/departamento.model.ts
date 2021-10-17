import {Entity, model, property} from '@loopback/repository';

@model()
export class Departamento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idDepartamento?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  idFacultad?: string;

  constructor(data?: Partial<Departamento>) {
    super(data);
  }
}

export interface DepartamentoRelations {
  // describe navigational properties here
}

export type DepartamentoWithRelations = Departamento & DepartamentoRelations;
