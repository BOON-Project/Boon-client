import * as types from "../actions/types";

let nextMessageId = 0;
const nextUserId = 0;

export const addMessage = (taskId) => ({
  type: types.ADD_MESSAGE,
  taskId: taskId,
});
