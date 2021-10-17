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
import {AreaInvestigacion} from '../models';
import {AreaInvestigacionRepository} from '../repositories';

export class AreaInvestigacionController {
  constructor(
    @repository(AreaInvestigacionRepository)
    public areaInvestigacionRepository : AreaInvestigacionRepository,
  ) {}

  @post('/area-investigacions')
  @response(200, {
    description: 'AreaInvestigacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(AreaInvestigacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaInvestigacion, {
            title: 'NewAreaInvestigacion',
            exclude: ['idAreaInvestigacion'],
          }),
        },
      },
    })
    areaInvestigacion: Omit<AreaInvestigacion, 'idAreaInvestigacion'>,
  ): Promise<AreaInvestigacion> {
    return this.areaInvestigacionRepository.create(areaInvestigacion);
  }

  @get('/area-investigacions/count')
  @response(200, {
    description: 'AreaInvestigacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AreaInvestigacion) where?: Where<AreaInvestigacion>,
  ): Promise<Count> {
    return this.areaInvestigacionRepository.count(where);
  }

  @get('/area-investigacions')
  @response(200, {
    description: 'Array of AreaInvestigacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AreaInvestigacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AreaInvestigacion) filter?: Filter<AreaInvestigacion>,
  ): Promise<AreaInvestigacion[]> {
    return this.areaInvestigacionRepository.find(filter);
  }

  @patch('/area-investigacions')
  @response(200, {
    description: 'AreaInvestigacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaInvestigacion, {partial: true}),
        },
      },
    })
    areaInvestigacion: AreaInvestigacion,
    @param.where(AreaInvestigacion) where?: Where<AreaInvestigacion>,
  ): Promise<Count> {
    return this.areaInvestigacionRepository.updateAll(areaInvestigacion, where);
  }

  @get('/area-investigacions/{id}')
  @response(200, {
    description: 'AreaInvestigacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AreaInvestigacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AreaInvestigacion, {exclude: 'where'}) filter?: FilterExcludingWhere<AreaInvestigacion>
  ): Promise<AreaInvestigacion> {
    return this.areaInvestigacionRepository.findById(id, filter);
  }

  @patch('/area-investigacions/{id}')
  @response(204, {
    description: 'AreaInvestigacion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaInvestigacion, {partial: true}),
        },
      },
    })
    areaInvestigacion: AreaInvestigacion,
  ): Promise<void> {
    await this.areaInvestigacionRepository.updateById(id, areaInvestigacion);
  }

  @put('/area-investigacions/{id}')
  @response(204, {
    description: 'AreaInvestigacion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() areaInvestigacion: AreaInvestigacion,
  ): Promise<void> {
    await this.areaInvestigacionRepository.replaceById(id, areaInvestigacion);
  }

  @del('/area-investigacions/{id}')
  @response(204, {
    description: 'AreaInvestigacion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.areaInvestigacionRepository.deleteById(id);
  }
}
