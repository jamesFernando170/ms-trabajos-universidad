import {Entity, model, property, hasMany} from '@loopback/repository';
import {Departamento} from './departamento.model';

@model()
export class Facultad extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idFacultad?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @hasMany(() => Departamento, {keyTo: 'idFacultad'})
  departamentos: Departamento[];

  constructor(data?: Partial<Facultad>) {
    super(data);
  }
}

export interface FacultadRelations {
  // describe navigational properties here
}

export type FacultadWithRelations = Facultad & FacultadRelations;
