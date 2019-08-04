export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  saveTodoList?: Maybe<SaveTodoListResponse>;
};

export type MutationSaveTodoListArgs = {
  input: SaveTodoListInput;
};

export type Query = {
  __typename?: "Query";
  todos: Array<TodoList>;
  todo: TodoList;
};

export type QueryTodoArgs = {
  id: Scalars["Int"];
};

export type SaveTodoListErrors = {
  __typename?: "SaveTodoListErrors";
  all_messages: Array<Scalars["String"]>;
};

export type SaveTodoListInput = {
  id?: Maybe<Scalars["Int"]>;
  name: Scalars["String"];
};

export type SaveTodoListResponse = {
  __typename?: "SaveTodoListResponse";
  success: Scalars["Boolean"];
  data?: Maybe<TodoList>;
  errors?: Maybe<SaveTodoListErrors>;
};

export type TodoList = {
  __typename?: "TodoList";
  id: Scalars["Int"];
  name: Scalars["String"];
};
