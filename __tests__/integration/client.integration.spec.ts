import { IClients } from "../../src/modules/clients/entities/clients.dto";

import { CreateClientUseCase } from "../../src/modules/clients/useCases/createClients.useCase";
import { FindClientUseCase } from "../../src/modules/clients/useCases/findClients.useCase";

import { CreateClientRepository } from "../../src/modules/clients/interfaces/repositores/createClients.repository";
import { FindClientRepository } from "../../src/modules/clients/interfaces/repositores/findClients.repository";

describe("Module client test", () => {
  it("Create client", async () => {
    const input: IClients = {
      nome: "Test integration",
    };

    const clientRepository = new CreateClientRepository(input);
    const client = new CreateClientUseCase(clientRepository);
    await expect(client.execute()).resolves.not.toThrow();
  });

  it("Find client", async () => {
    const findClientRepository = new FindClientRepository();
    const client = new FindClientUseCase(findClientRepository);
    await expect(client.execute()).resolves.not.toThrow();
  });
});
