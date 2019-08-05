import { validate } from 'class-validator';
import gql from 'graphql-tag';
import { TodoList } from '../../entities/todo-list';
import { MutationResolvers } from '../types';

export const SaveInput = gql`
  input SaveTodoListInput {
    id: Int
    name: String!
  }
`;

export const SaveResponse = gql`
  type SaveTodoListResponse {
    success: Boolean!
    data: TodoList
    errors: [String!]!
  }
`;

import { getConnection } from 'typeorm';

export const saveResolver: MutationResolvers['saveTodoList'] = (async (_, { input }, _ctx) => {
  const conn = await getConnection();
  const todoList = input.id ? await conn.getRepository(TodoList).findOneOrFail(input.id)
    : new TodoList();
  const errors: string[] = [];
  let success: boolean = false;
  let data: TodoList | null = null;

  todoList.name = input.name;

  await validate(todoList).then(async (validationErrors) => {
    if (validationErrors.length > 0) {
      validationErrors.forEach((x) => errors.push(...Object.values(x.constraints)));
    } else {
      await conn.getRepository(TodoList).save(todoList);
      data = todoList;
      success = true;
    }
  });

  return {
    success,
    data,
    errors
  };
});
