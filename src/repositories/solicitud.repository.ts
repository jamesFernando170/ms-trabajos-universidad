import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, TiposComite, SolicitudComite} from '../models';
import {SolicitudComiteRepository} from './solicitud-comite.repository';
import {TiposComiteRepository} from './tipos-comite.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.idSolicitud,
  SolicitudRelations
> {

  public readonly tiposComites: HasManyThroughRepositoryFactory<TiposComite, typeof TiposComite.prototype.idTipoComite,
          SolicitudComite,
          typeof Solicitud.prototype.idSolicitud
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('SolicitudComiteRepository') protected solicitudComiteRepositoryGetter: Getter<SolicitudComiteRepository>, @repository.getter('TiposComiteRepository') protected tiposComiteRepositoryGetter: Getter<TiposComiteRepository>,
  ) {
    super(Solicitud, dataSource);
    this.tiposComites = this.createHasManyThroughRepositoryFactoryFor('tiposComites', tiposComiteRepositoryGetter, solicitudComiteRepositoryGetter,);
    this.registerInclusionResolver('tiposComites', this.tiposComites.inclusionResolver);
  }
}
