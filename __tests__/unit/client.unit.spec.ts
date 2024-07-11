import { IClients } from "../../src/modules/clients/entities/clients.dto";
import { FindMockRepository } from "../mocks/find.mock";
import { CreateMockRepository } from "../mocks/create.mock";

describe("Module client test", () => {
  it("Create client", async () => {
    const input: IClients = {
      nome: "Test unit",
    };

    const client = new CreateMockRepository(input);
    await expect(client.create()).resolves.not.toThrow();
  });

  it("Find client", async () => {    
    const client = new FindMockRepository();
    await expect(client.find()).resolves.not.toThrow();
  });
});
