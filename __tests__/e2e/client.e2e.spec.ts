import supertest from "supertest";
import { IClients } from "../../src/modules/clients/entities/clients.dto";

describe("Test create publications integration", () => {
  it("Create client", async () => {
    const input: IClients = {
      nome: "Test e2e",
    };

    const listAllCalendars = await supertest("http://localhost:8080/dev")
      .post(`/clients/create`)
      .send(input)
      .set("Authorization", String(process.env.TOKEN_SECRET));
    expect(listAllCalendars.status).toEqual(201);
    expect(listAllCalendars).toBeDefined();
  });

  it("Lista all clients", async () => {
    const listAllCalendars = await supertest("http://localhost:8080/dev")
    .get(`/clients/find`)
    .set("Authorization", String(process.env.TOKEN_SECRET))
    expect(listAllCalendars.status).toEqual(200);
    expect(listAllCalendars).toBeDefined();
  });
});
