import type { ValidatedEventAPIGatewayProxyEvent } from "@infra/libs/apiGateway/api-gateway";
import { formatJSONResponse } from "@infra/libs/apiGateway/api-gateway";
import schema from "./schema";
import { middyfy } from "@infra/libs/lambda/lambda";


import { IClients } from "@modules/clients/entities/clients.dto";
import { CreateClientUseCase } from "@modules/clients/useCases/createClients.useCase";
import { CreateClientRepository } from "../../repositores/createClients.repository";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const input = event.body as IClients;

  const clientRepository = new CreateClientRepository(input);
  const client = new CreateClientUseCase(clientRepository);
  try {
    await client.execute();
    return formatJSONResponse(201, {
      message: `Cliente cadastrado com sucesso!`,
    });
  } catch (error) {
    console.error(error);
  }
};

export const main = middyfy(handler);
