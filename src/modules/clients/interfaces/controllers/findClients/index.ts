import schema from './schema';
import { handlerPath } from '@infra/libs/lambda/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'clients/find',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
