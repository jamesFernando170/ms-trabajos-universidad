import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TiposComite, TiposComiteRelations} from '../models';

export class TiposComiteRepository extends DefaultCrudRepository<
  TiposComite,
  typeof TiposComite.prototype.idTipoComite,
  TiposComiteRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TiposComite, dataSource);
  }
}
