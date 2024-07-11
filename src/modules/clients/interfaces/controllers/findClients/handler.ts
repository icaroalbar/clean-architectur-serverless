import type { ValidatedEventAPIGatewayProxyEvent } from '@infra/libs/apiGateway/api-gateway';
import { formatJSONResponse } from '@infra/libs/apiGateway/api-gateway';
import schema from './schema';
import { middyfy } from '@infra/libs/lambda/lambda';

import { FindClientRepository } from '../../repositores/findClients.repository';
import { FindClientUseCase } from '@modules/clients/useCases/findClients.useCase';
import { DatabaseConnection } from '@infra/database/databaseConnection';

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const token = event.headers.Authorization
  const database = new DatabaseConnection()

  const findClientRepository = new FindClientRepository(database, token)
  
  const client = new FindClientUseCase(findClientRepository);
  try {
    const result = await client.execute();
    return formatJSONResponse(200, {
      result
    });
  } catch (error) {
    console.error(error)
  }
};

export const main = middyfy(handler);