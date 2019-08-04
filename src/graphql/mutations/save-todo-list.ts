import gql from "graphql-tag";

export const SaveInput = gql`
  input SaveTodoListInput {
    id: Int
    name: String!
  }
`;

export const SaveErrors = gql`
  type SaveTodoListErrors {
    all_messages: [String!]!
  }
`;

export const SaveResponse = gql`
  type SaveTodoListResponse {
    success: Boolean!
    data: TodoList
    errors: SaveTodoListErrors
  }
`;
