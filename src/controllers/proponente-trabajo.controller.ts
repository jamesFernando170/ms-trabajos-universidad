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
import {ProponenteTrabajo} from '../models';
import {ProponenteTrabajoRepository} from '../repositories';

export class ProponenteTrabajoController {
  constructor(
    @repository(ProponenteTrabajoRepository)
    public proponenteTrabajoRepository : ProponenteTrabajoRepository,
  ) {}

  @post('/proponente-trabajos')
  @response(200, {
    description: 'ProponenteTrabajo model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProponenteTrabajo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteTrabajo, {
            title: 'NewProponenteTrabajo',
            exclude: ['idCedula'],
          }),
        },
      },
    })
    proponenteTrabajo: Omit<ProponenteTrabajo, 'idCedula'>,
  ): Promise<ProponenteTrabajo> {
    return this.proponenteTrabajoRepository.create(proponenteTrabajo);
  }

  @get('/proponente-trabajos/count')
  @response(200, {
    description: 'ProponenteTrabajo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProponenteTrabajo) where?: Where<ProponenteTrabajo>,
  ): Promise<Count> {
    return this.proponenteTrabajoRepository.count(where);
  }

  @get('/proponente-trabajos')
  @response(200, {
    description: 'Array of ProponenteTrabajo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProponenteTrabajo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProponenteTrabajo) filter?: Filter<ProponenteTrabajo>,
  ): Promise<ProponenteTrabajo[]> {
    return this.proponenteTrabajoRepository.find(filter);
  }

  @patch('/proponente-trabajos')
  @response(200, {
    description: 'ProponenteTrabajo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteTrabajo, {partial: true}),
        },
      },
    })
    proponenteTrabajo: ProponenteTrabajo,
    @param.where(ProponenteTrabajo) where?: Where<ProponenteTrabajo>,
  ): Promise<Count> {
    return this.proponenteTrabajoRepository.updateAll(proponenteTrabajo, where);
  }

  @get('/proponente-trabajos/{id}')
  @response(200, {
    description: 'ProponenteTrabajo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProponenteTrabajo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ProponenteTrabajo, {exclude: 'where'}) filter?: FilterExcludingWhere<ProponenteTrabajo>
  ): Promise<ProponenteTrabajo> {
    return this.proponenteTrabajoRepository.findById(id, filter);
  }

  @patch('/proponente-trabajos/{id}')
  @response(204, {
    description: 'ProponenteTrabajo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteTrabajo, {partial: true}),
        },
      },
    })
    proponenteTrabajo: ProponenteTrabajo,
  ): Promise<void> {
    await this.proponenteTrabajoRepository.updateById(id, proponenteTrabajo);
  }

  @put('/proponente-trabajos/{id}')
  @response(204, {
    description: 'ProponenteTrabajo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() proponenteTrabajo: ProponenteTrabajo,
  ): Promise<void> {
    await this.proponenteTrabajoRepository.replaceById(id, proponenteTrabajo);
  }

  @del('/proponente-trabajos/{id}')
  @response(204, {
    description: 'ProponenteTrabajo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.proponenteTrabajoRepository.deleteById(id);
  }
}
