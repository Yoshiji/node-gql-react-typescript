import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import { getConnection } from 'typeorm';
import { TodoList as TodoListModel } from '../entities/todo-list';
import {
  SaveInput as SaveTodoListInput,
  saveResolver as SaveTodoListResolver,
  SaveResponse as SaveTodoListResponse
} from './mutations/save-todo-list';
import { MutationResolvers, QueryResolvers } from './types';
import { typeDef as TodoList } from './types/todo-list';

const Query = gql`
  type Query {
    todoList(id: Int!): TodoList!
    todoLists: [TodoList!]!
  }
`;

const Mutation = gql`
  type Mutation {
    saveTodoList(input: SaveTodoListInput!): SaveTodoListResponse!
  }
`;

const Schema = makeExecutableSchema({
  typeDefs:
    [Query, Mutation, TodoList, SaveTodoListInput, SaveTodoListResponse],
  resolvers: {
    Query: ({
      // TODO: catch and return 404
      todoList: (async (_, { id }) =>
        (await getConnection().getRepository(TodoListModel).findOneOrFail(id))),
      todoLists: (async () =>
        (await getConnection().getRepository(TodoListModel).find()))
    }) as QueryResolvers,
    Mutation: ({
      saveTodoList: SaveTodoListResolver
    }) as MutationResolvers
  }
});

export {
  Schema
};
