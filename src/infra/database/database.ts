import { Pool } from "pg";

const databaseConfig = JSON.parse(process.env.DB_CONFIG)

export const pool = new Pool({
  user:databaseConfig.user,
  host: databaseConfig.host,
  database: databaseConfig.database,
  password: databaseConfig.password,
  port: 5432,
});