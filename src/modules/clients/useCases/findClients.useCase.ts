import { IFindClientRepository } from "../entities/repositories/IFindClient.repository";

export class FindClientUseCase {
  constructor(private findClientRepository: IFindClientRepository) {}

  async execute(): Promise<void> {
      await this.findClientRepository.find();
  }
}