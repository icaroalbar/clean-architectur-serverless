import { IDatabaseConnectionRepository } from "@infra/database/IdatabaseConnection";
import { jwtDecode } from "jwt-decode";
import {
  ISearchUserInformation,
} from "./types/ISearchUserInformation";

export class SearchUserInformation {

  static async execute(database: IDatabaseConnectionRepository, token: string): Promise<ISearchUserInformation> {
    const id_cliente_amazon = jwtDecode(token).sub;
    const sql = `SELECT * FROM usuario WHERE id_cliente_amazon = $1`;
    const result = await database.query(sql, [id_cliente_amazon]);
    return result.rows[0];
  }
}
