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
ProponenteTrabajo,
SolicitudProponente,
Solicitud,
} from '../models';
import {ProponenteTrabajoRepository} from '../repositories';

export class ProponenteTrabajoSolicitudController {
  constructor(
    @repository(ProponenteTrabajoRepository) protected proponenteTrabajoRepository: ProponenteTrabajoRepository,
  ) { }

  @get('/proponente-trabajos/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Array of ProponenteTrabajo has many Solicitud through SolicitudProponente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud[]> {
    return this.proponenteTrabajoRepository.solicituds(id).find(filter);
  }

  @post('/proponente-trabajos/{id}/solicituds', {
    responses: {
      '200': {
        description: 'create a Solicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof ProponenteTrabajo.prototype.idCedula,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInProponenteTrabajo',
            exclude: ['idSolicitud'],
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'idSolicitud'>,
  ): Promise<Solicitud> {
    return this.proponenteTrabajoRepository.solicituds(id).create(solicitud);
  }

  @patch('/proponente-trabajos/{id}/solicituds', {
    responses: {
      '200': {
        description: 'ProponenteTrabajo.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.proponenteTrabajoRepository.solicituds(id).patch(solicitud, where);
  }

  @del('/proponente-trabajos/{id}/solicituds', {
    responses: {
      '200': {
        description: 'ProponenteTrabajo.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.proponenteTrabajoRepository.solicituds(id).delete(where);
  }
}
