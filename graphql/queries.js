/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRooms = /* GraphQL */ `
  query GetRooms($id: ID!) {
    getRooms(id: $id) {
      id
      roomnum
      cleaner
      createdAt
      updatedAt
    }
  }
`;
export const listRoomss = /* GraphQL */ `
  query ListRoomss(
    $filter: ModelRoomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoomss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roomnum
        cleaner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
