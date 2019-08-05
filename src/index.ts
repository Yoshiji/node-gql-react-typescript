import express from 'express';
import * as gqlConfig from 'express-graphql';
import { Schema as GraphQLSchema } from './graphql/schema';

/* tslint:disable no-console */

const app = express();
app.use((req, _whatever, next) => {
  console.log(`${new Date().toISOString()}: ${req.method} ${req.path}`);
  next();
});

app.use('/graphql', gqlConfig.default({
  schema: GraphQLSchema,
  graphiql: true
}));

const port = 3000;
app.listen(port, () => console.log(`Listenning on port ${port}`));

import { createConnection } from 'typeorm';
createConnection();

/* tslint:enable no-console */
