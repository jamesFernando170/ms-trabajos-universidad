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
Solicitud,
SolicitudComite,
TiposComite,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudTiposComiteController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/tipos-comites', {
    responses: {
      '200': {
        description: 'Array of Solicitud has many TiposComite through SolicitudComite',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TiposComite)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<TiposComite>,
  ): Promise<TiposComite[]> {
    return this.solicitudRepository.tiposComites(id).find(filter);
  }

  @post('/solicituds/{id}/tipos-comites', {
    responses: {
      '200': {
        description: 'create a TiposComite model instance',
        content: {'application/json': {schema: getModelSchemaRef(TiposComite)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Solicitud.prototype.idSolicitud,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TiposComite, {
            title: 'NewTiposComiteInSolicitud',
            exclude: ['idTipoComite'],
          }),
        },
      },
    }) tiposComite: Omit<TiposComite, 'idTipoComite'>,
  ): Promise<TiposComite> {
    return this.solicitudRepository.tiposComites(id).create(tiposComite);
  }

  @patch('/solicituds/{id}/tipos-comites', {
    responses: {
      '200': {
        description: 'Solicitud.TiposComite PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TiposComite, {partial: true}),
        },
      },
    })
    tiposComite: Partial<TiposComite>,
    @param.query.object('where', getWhereSchemaFor(TiposComite)) where?: Where<TiposComite>,
  ): Promise<Count> {
    return this.solicitudRepository.tiposComites(id).patch(tiposComite, where);
  }

  @del('/solicituds/{id}/tipos-comites', {
    responses: {
      '200': {
        description: 'Solicitud.TiposComite DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(TiposComite)) where?: Where<TiposComite>,
  ): Promise<Count> {
    return this.solicitudRepository.tiposComites(id).delete(where);
  }
}
