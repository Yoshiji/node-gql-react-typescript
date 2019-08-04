import gql from "graphql-tag";
import { makeExecutableSchema } from "graphql-tools";
import {
  SaveErrors as SaveTodoListErrors,
  SaveInput as SaveTodoListInput,
  SaveResponse as SaveTodoListResponse
} from "./mutations/save-todo-list";
import { MutationResolvers, QueryResolvers } from "./types";
import { typeDef as TodoList } from "./types/todo-list";

const Query = gql`
  type Query {
    todoLists: [TodoList!]!
    todo(id: Int!): TodoList!
  }
`;

const Mutation = gql`
  type Mutation {
    saveTodoList(input: SaveTodoListInput!): SaveTodoListResponse!
  }
`;

const Schema = makeExecutableSchema({
  typeDefs:
    [Query, Mutation, TodoList, SaveTodoListInput, SaveTodoListResponse, SaveTodoListErrors],
  resolvers: {
    Query: ({
      todo: () => ({ id: 1, name: "heyyo" }),
      todoLists: () => []
    }) as QueryResolvers,
    Mutation: ({
      saveTodoList: (_, args, ctx) => {
        return {
          success: false,
          data: null,
          errors: {
            all_messages: [args.input.name]
          }
        };
      }
    }) as MutationResolvers
  }
});

export {
  Schema
};
