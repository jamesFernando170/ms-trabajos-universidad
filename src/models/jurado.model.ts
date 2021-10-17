import {Entity, model, property, hasMany} from '@loopback/repository';
import {AreaInvestigacion} from './area-investigacion.model';
import {JuradoAreaInvestigacion} from './jurado-area-investigacion.model';
import {InvitacionEvaluar} from './invitacion-evaluar.model';

@model()
export class Jurado extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idJurado?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  entidad: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @hasMany(() => AreaInvestigacion, {through: {model: () => JuradoAreaInvestigacion, keyFrom: 'idJurado', keyTo: 'idAreaInvestigacion'}})
  areaInvestigacions: AreaInvestigacion[];

  @hasMany(() => InvitacionEvaluar, {keyTo: 'idJurado'})
  invitacionEvaluars: InvitacionEvaluar[];

  constructor(data?: Partial<Jurado>) {
    super(data);
  }
}

export interface JuradoRelations {
  // describe navigational properties here
}

export type JuradoWithRelations = Jurado & JuradoRelations;
