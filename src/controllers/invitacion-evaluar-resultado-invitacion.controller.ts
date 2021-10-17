import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  InvitacionEvaluar,
  ResultadoInvitacion,
} from '../models';
import {InvitacionEvaluarRepository} from '../repositories';

export class InvitacionEvaluarResultadoInvitacionController {
  constructor(
    @repository(InvitacionEvaluarRepository) protected invitacionEvaluarRepository: InvitacionEvaluarRepository,
  ) { }

  @get('/invitacion-evaluars/{id}/resultado-invitacions', {
    responses: {
      '200': {
        description: 'Array of InvitacionEvaluar has many ResultadoInvitacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ResultadoInvitacion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ResultadoInvitacion>,
  ): Promise<ResultadoInvitacion[]> {
    return this.invitacionEvaluarRepository.resultadoInvitacions(id).find(filter);
  }

  @post('/invitacion-evaluars/{id}/resultado-invitacions', {
    responses: {
      '200': {
        description: 'InvitacionEvaluar model instance',
        content: {'application/json': {schema: getModelSchemaRef(ResultadoInvitacion)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof InvitacionEvaluar.prototype.idInvitacionEvaluar,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultadoInvitacion, {
            title: 'NewResultadoInvitacionInInvitacionEvaluar',
            exclude: ['idResultadoInvitacion'],
            optional: ['idInvitacionEvaluar']
          }),
        },
      },
    }) resultadoInvitacion: Omit<ResultadoInvitacion, 'idResultadoInvitacion'>,
  ): Promise<ResultadoInvitacion> {
    return this.invitacionEvaluarRepository.resultadoInvitacions(id).create(resultadoInvitacion);
  }

  @patch('/invitacion-evaluars/{id}/resultado-invitacions', {
    responses: {
      '200': {
        description: 'InvitacionEvaluar.ResultadoInvitacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultadoInvitacion, {partial: true}),
        },
      },
    })
    resultadoInvitacion: Partial<ResultadoInvitacion>,
    @param.query.object('where', getWhereSchemaFor(ResultadoInvitacion)) where?: Where<ResultadoInvitacion>,
  ): Promise<Count> {
    return this.invitacionEvaluarRepository.resultadoInvitacions(id).patch(resultadoInvitacion, where);
  }

  @del('/invitacion-evaluars/{id}/resultado-invitacions', {
    responses: {
      '200': {
        description: 'InvitacionEvaluar.ResultadoInvitacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ResultadoInvitacion)) where?: Where<ResultadoInvitacion>,
  ): Promise<Count> {
    return this.invitacionEvaluarRepository.resultadoInvitacions(id).delete(where);
  }
}
