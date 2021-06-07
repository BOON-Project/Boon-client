import * as types from "../actions/types";

let nextMessageId = 0;
const nextUserId = 0;

export const addMessage = (taskId) => ({
  type: types.ADD_MESSAGE,
  taskId: taskId,
});

export const addUser = (name) => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name,
});

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
});

export const populateUsersList = (users) => ({
  type: types.USERS_LIST,
  users,
});
