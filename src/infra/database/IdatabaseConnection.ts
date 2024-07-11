export interface IDatabaseConnectionRepository {
  connect(): Promise<void>;
  query(sql: string, params?: any[]): Promise<string | any>;
  disconnect(): void;
};
