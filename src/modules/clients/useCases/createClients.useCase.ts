import { IClients } from "../entities/clients.dto";
import { Client } from "../entities/clients.entities";
import { ICreateClientRepository } from "../entities/repositories/ICreateClient.repository";

export class CreateClientUseCase {
  input: IClients
  constructor(private createClientRepository: ICreateClientRepository) {}

  async execute(): Promise<void> {
      new Client(this.input)
      await this.createClientRepository.create();
  }
}