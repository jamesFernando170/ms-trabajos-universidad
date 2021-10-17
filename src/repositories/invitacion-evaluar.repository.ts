import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {InvitacionEvaluar, InvitacionEvaluarRelations, Recordatorio, ResultadoInvitacion} from '../models';
import {RecordatorioRepository} from './recordatorio.repository';
import {ResultadoInvitacionRepository} from './resultado-invitacion.repository';

export class InvitacionEvaluarRepository extends DefaultCrudRepository<
  InvitacionEvaluar,
  typeof InvitacionEvaluar.prototype.idInvitacionEvaluar,
  InvitacionEvaluarRelations
> {

  public readonly recordatorios: HasManyRepositoryFactory<Recordatorio, typeof InvitacionEvaluar.prototype.idInvitacionEvaluar>;

  public readonly resultadoInvitacions: HasManyRepositoryFactory<ResultadoInvitacion, typeof InvitacionEvaluar.prototype.idInvitacionEvaluar>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('RecordatorioRepository') protected recordatorioRepositoryGetter: Getter<RecordatorioRepository>, @repository.getter('ResultadoInvitacionRepository') protected resultadoInvitacionRepositoryGetter: Getter<ResultadoInvitacionRepository>,
  ) {
    super(InvitacionEvaluar, dataSource);
    this.resultadoInvitacions = this.createHasManyRepositoryFactoryFor('resultadoInvitacions', resultadoInvitacionRepositoryGetter,);
    this.registerInclusionResolver('resultadoInvitacions', this.resultadoInvitacions.inclusionResolver);
    this.recordatorios = this.createHasManyRepositoryFactoryFor('recordatorios', recordatorioRepositoryGetter,);
    this.registerInclusionResolver('recordatorios', this.recordatorios.inclusionResolver);
  }
}
