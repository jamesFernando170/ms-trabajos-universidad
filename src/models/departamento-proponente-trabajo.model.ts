import {Entity, model, property} from '@loopback/repository';

@model()
export class DepartamentoProponenteTrabajo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  idProponenteTrabajo?: string;

  @property({
    type: 'number',
  })
  idDepartamento?: number;

  constructor(data?: Partial<DepartamentoProponenteTrabajo>) {
    super(data);
  }
}

export interface DepartamentoProponenteTrabajoRelations {
  // describe navigational properties here
}

export type DepartamentoProponenteTrabajoWithRelations = DepartamentoProponenteTrabajo & DepartamentoProponenteTrabajoRelations;
