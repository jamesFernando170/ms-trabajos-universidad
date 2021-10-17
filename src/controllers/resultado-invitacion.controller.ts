import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ResultadoInvitacion} from '../models';
import {ResultadoInvitacionRepository} from '../repositories';

export class ResultadoInvitacionController {
  constructor(
    @repository(ResultadoInvitacionRepository)
    public resultadoInvitacionRepository : ResultadoInvitacionRepository,
  ) {}

  @post('/resultado-invitacions')
  @response(200, {
    description: 'ResultadoInvitacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResultadoInvitacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultadoInvitacion, {
            title: 'NewResultadoInvitacion',
            exclude: ['idResultadoInvitacion'],
          }),
        },
      },
    })
    resultadoInvitacion: Omit<ResultadoInvitacion, 'idResultadoInvitacion'>,
  ): Promise<ResultadoInvitacion> {
    return this.resultadoInvitacionRepository.create(resultadoInvitacion);
  }

  @get('/resultado-invitacions/count')
  @response(200, {
    description: 'ResultadoInvitacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResultadoInvitacion) where?: Where<ResultadoInvitacion>,
  ): Promise<Count> {
    return this.resultadoInvitacionRepository.count(where);
  }

  @get('/resultado-invitacions')
  @response(200, {
    description: 'Array of ResultadoInvitacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResultadoInvitacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResultadoInvitacion) filter?: Filter<ResultadoInvitacion>,
  ): Promise<ResultadoInvitacion[]> {
    return this.resultadoInvitacionRepository.find(filter);
  }

  @patch('/resultado-invitacions')
  @response(200, {
    description: 'ResultadoInvitacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultadoInvitacion, {partial: true}),
        },
      },
    })
    resultadoInvitacion: ResultadoInvitacion,
    @param.where(ResultadoInvitacion) where?: Where<ResultadoInvitacion>,
  ): Promise<Count> {
    return this.resultadoInvitacionRepository.updateAll(resultadoInvitacion, where);
  }

  @get('/resultado-invitacions/{id}')
  @response(200, {
    description: 'ResultadoInvitacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResultadoInvitacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ResultadoInvitacion, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultadoInvitacion>
  ): Promise<ResultadoInvitacion> {
    return this.resultadoInvitacionRepository.findById(id, filter);
  }

  @patch('/resultado-invitacions/{id}')
  @response(204, {
    description: 'ResultadoInvitacion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultadoInvitacion, {partial: true}),
        },
      },
    })
    resultadoInvitacion: ResultadoInvitacion,
  ): Promise<void> {
    await this.resultadoInvitacionRepository.updateById(id, resultadoInvitacion);
  }

  @put('/resultado-invitacions/{id}')
  @response(204, {
    description: 'ResultadoInvitacion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() resultadoInvitacion: ResultadoInvitacion,
  ): Promise<void> {
    await this.resultadoInvitacionRepository.replaceById(id, resultadoInvitacion);
  }

  @del('/resultado-invitacions/{id}')
  @response(204, {
    description: 'ResultadoInvitacion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.resultadoInvitacionRepository.deleteById(id);
  }
}
