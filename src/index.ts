import express from 'express';
import * as gqlConfig from 'express-graphql';
import { Schema as GraphQLSchema } from './graphql/schema';
import {
  QueryResolvers, MutationResolvers
} from './graphql/types';

const app = express();

app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()}: ${req.method} ${req.path}`);
  next();
});

app.use('/graphql', gqlConfig.default({
  schema: GraphQLSchema,
  graphiql: true
}));

const port = 3000;
app.listen(port, () => console.log(`Listenning on port ${port}`));