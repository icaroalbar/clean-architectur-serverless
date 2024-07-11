import { PoolClient } from "pg";
import { pool } from "./database";
import { IDatabaseConnectionRepository } from "./IdatabaseConnection";

export class DatabaseConnection implements IDatabaseConnectionRepository {
  private data: PoolClient;

  async connect(): Promise<void> {
    this.data = await pool.connect();
  }

  async query(sql: string, params?: any[]): Promise<any> {
    return this.data.query(sql, params);
  }

  disconnect(): void {
    this.data.release(true);
  }
}
