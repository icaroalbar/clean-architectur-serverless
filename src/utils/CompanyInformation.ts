import { IDatabaseConnectionRepository } from "@infra/database/IdatabaseConnection";
import { SearchUserInformation } from "./SearchUserInformation";
import { ISearchCompanyInformation } from "./types/ISearchCompanyInformation";

export class SearchCompanyInformation {

  static async execute(database: IDatabaseConnectionRepository, token: string): Promise<ISearchCompanyInformation> {
    const id_cliente_galgtec = await SearchUserInformation.execute(database, token);
    const sql = `SELECT * FROM cliente_galgtec WHERE id = $1`;
    const result = await database.query(sql, [id_cliente_galgtec.id_cliente_galgtec]);
    return result.rows[0];
  }
}
