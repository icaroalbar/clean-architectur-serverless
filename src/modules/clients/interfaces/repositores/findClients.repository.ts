import { IDatabaseConnectionRepository } from "@infra/database/IdatabaseConnection";
import { IClients } from "@modules/clients/entities/clients.dto";
import { IFindClientRepository } from "@modules/clients/entities/repositories/IFindClient.repository";
import { SearchCompanyInformation } from "@utils/CompanyInformation";
import { SearchUserInformation } from "@utils/SearchUserInformation";

export class FindClientRepository implements IFindClientRepository {
  constructor(
    private readonly database: IDatabaseConnectionRepository,
    private readonly token: string
  ) {
    this.database = database;
    this.token = token;
  }

  async find(): Promise<IClients> {
    await this.database.connect();
    const company = await SearchCompanyInformation.execute(
      this.database,
      this.token
    );
    const id_cliente_galgtec = await SearchUserInformation.execute(
      this.database,
      this.token
    );
    try {
      const values = [id_cliente_galgtec.id_cliente_galgtec, false];
      const sql = `SELECT * FROM ${company.schema_db}.cliente WHERE id_usuario = $1 OR sigiloso = $2`;
      const result = await this.database.query(sql, values);
      return result.rows;
    } finally {
      this.database.disconnect();
    }
  }
}
