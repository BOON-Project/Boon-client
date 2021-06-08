import * as types from "../actions/types";

export const addMessage = (taskId) => ({
  type: types.ADD_MESSAGE,
  taskId: taskId,
});
