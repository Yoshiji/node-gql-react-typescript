import express from "express";
import * as gqlConfig from "express-graphql";
import { Schema as GraphQLSchema } from "./graphql/schema";

const app = express();
/* tslint:disable no-console */
app.use((req, _whatever, next) => {
  console.log(`${new Date().toISOString()}: ${req.method} ${req.path}`);
  next();
});

app.use("/graphql", gqlConfig.default({
  schema: GraphQLSchema,
  graphiql: true
}));

const port = 3000;
app.listen(port, () => console.log(`Listenning on port ${port}`));
/* tslint:enable no-console */
