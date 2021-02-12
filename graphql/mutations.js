/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createRooms = /* GraphQL */ `
  mutation CreateRooms(
    $input: CreateRoomsInput!
    $condition: ModelRoomsConditionInput
  ) {
    createRooms(input: $input, condition: $condition) {
      id
      roomnum
      cleaner
      createdAt
      updatedAt
    }
  }
`;
export const updateRooms = /* GraphQL */ `
  mutation UpdateRooms(
    $input: UpdateRoomsInput!
    $condition: ModelRoomsConditionInput
  ) {
    updateRooms(input: $input, condition: $condition) {
      id
      roomnum
      cleaner
      createdAt
      updatedAt
    }
  }
`;
export const deleteRooms = /* GraphQL */ `
  mutation DeleteRooms(
    $input: DeleteRoomsInput!
    $condition: ModelRoomsConditionInput
  ) {
    deleteRooms(input: $input, condition: $condition) {
      id
      roomnum
      cleaner
      createdAt
      updatedAt
    }
  }
`;
