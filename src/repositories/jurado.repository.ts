import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Jurado, JuradoRelations, AreaInvestigacion, JuradoAreaInvestigacion, InvitacionEvaluar} from '../models';
import {JuradoAreaInvestigacionRepository} from './jurado-area-investigacion.repository';
import {AreaInvestigacionRepository} from './area-investigacion.repository';
import {InvitacionEvaluarRepository} from './invitacion-evaluar.repository';

export class JuradoRepository extends DefaultCrudRepository<
  Jurado,
  typeof Jurado.prototype.idJurado,
  JuradoRelations
> {

  public readonly areaInvestigacions: HasManyThroughRepositoryFactory<AreaInvestigacion, typeof AreaInvestigacion.prototype.idAreaInvestigacion,
          JuradoAreaInvestigacion,
          typeof Jurado.prototype.idJurado
        >;

  public readonly invitacionEvaluars: HasManyRepositoryFactory<InvitacionEvaluar, typeof Jurado.prototype.idJurado>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('JuradoAreaInvestigacionRepository') protected juradoAreaInvestigacionRepositoryGetter: Getter<JuradoAreaInvestigacionRepository>, @repository.getter('AreaInvestigacionRepository') protected areaInvestigacionRepositoryGetter: Getter<AreaInvestigacionRepository>, @repository.getter('InvitacionEvaluarRepository') protected invitacionEvaluarRepositoryGetter: Getter<InvitacionEvaluarRepository>,
  ) {
    super(Jurado, dataSource);
    this.invitacionEvaluars = this.createHasManyRepositoryFactoryFor('invitacionEvaluars', invitacionEvaluarRepositoryGetter,);
    this.registerInclusionResolver('invitacionEvaluars', this.invitacionEvaluars.inclusionResolver);
    this.areaInvestigacions = this.createHasManyThroughRepositoryFactoryFor('areaInvestigacions', areaInvestigacionRepositoryGetter, juradoAreaInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('areaInvestigacions', this.areaInvestigacions.inclusionResolver);
  }
}
