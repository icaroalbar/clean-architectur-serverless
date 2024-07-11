import { IClients } from "../../src/modules/clients/entities/clients.dto";
import { Client } from "../../src/modules/clients/entities/clients.entities";

describe("Client entitie test", () => {
  it("New client", () => {
    const input: IClients = {
      nome: "Test unit"
    };
    const client = new Client(input);
    expect(client.props).toStrictEqual(input);
  });
});
