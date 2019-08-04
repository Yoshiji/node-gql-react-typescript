import gql from "graphql-tag";

export const typeDef = gql`
  type TodoList {
    id: Int!
    name: String!
  }
`;
