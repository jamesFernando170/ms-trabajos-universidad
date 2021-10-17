import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ProponenteTrabajo, ProponenteTrabajoRelations, Departamento, DepartamentoProponenteTrabajo, Solicitud, SolicitudProponente} from '../models';
import {DepartamentoProponenteTrabajoRepository} from './departamento-proponente-trabajo.repository';
import {DepartamentoRepository} from './departamento.repository';
import {SolicitudProponenteRepository} from './solicitud-proponente.repository';
import {SolicitudRepository} from './solicitud.repository';

export class ProponenteTrabajoRepository extends DefaultCrudRepository<
  ProponenteTrabajo,
  typeof ProponenteTrabajo.prototype.idCedula,
  ProponenteTrabajoRelations
> {

  public readonly departamentos: HasManyThroughRepositoryFactory<Departamento, typeof Departamento.prototype.idDepartamento,
          DepartamentoProponenteTrabajo,
          typeof ProponenteTrabajo.prototype.idCedula
        >;

  public readonly solicituds: HasManyThroughRepositoryFactory<Solicitud, typeof Solicitud.prototype.idSolicitud,
          SolicitudProponente,
          typeof ProponenteTrabajo.prototype.idCedula
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('DepartamentoProponenteTrabajoRepository') protected departamentoProponenteTrabajoRepositoryGetter: Getter<DepartamentoProponenteTrabajoRepository>, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>, @repository.getter('SolicitudProponenteRepository') protected solicitudProponenteRepositoryGetter: Getter<SolicitudProponenteRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(ProponenteTrabajo, dataSource);
    this.solicituds = this.createHasManyThroughRepositoryFactoryFor('solicituds', solicitudRepositoryGetter, solicitudProponenteRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    this.departamentos = this.createHasManyThroughRepositoryFactoryFor('departamentos', departamentoRepositoryGetter, departamentoProponenteTrabajoRepositoryGetter,);
    this.registerInclusionResolver('departamentos', this.departamentos.inclusionResolver);
  }
}
