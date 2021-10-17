import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ResultadoInvitacion, ResultadoInvitacionRelations} from '../models';

export class ResultadoInvitacionRepository extends DefaultCrudRepository<
  ResultadoInvitacion,
  typeof ResultadoInvitacion.prototype.idResultadoInvitacion,
  ResultadoInvitacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ResultadoInvitacion, dataSource);
  }
}
