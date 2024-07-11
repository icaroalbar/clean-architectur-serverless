import { IClients } from "@modules/clients/entities/clients.dto";
import { ICreateClientRepository } from "@modules/clients/entities/repositories/ICreateClient.repository";

export class CreateClientRepository implements ICreateClientRepository {
  input: IClients
  // constructor(private database: DatabaseConnectionProtocol) {}
  constructor(input: IClients) {
    this.input = input
  }

  async create(): Promise<void> {
    console.log(this.input);
  }
}
