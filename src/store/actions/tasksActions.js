import {
  getTask,
  getTasks,
  getUserOfferedTasks,
  getUserReceivedTasks,
} from "../../helpers/apiCalls";
import {
  GET_TASK,
  GET_TASKS,
  GET_USER_OFFERED_TASKS,
  GET_USER_RECEIVED_TASKS,
} from "./types";

export const getTasksAction = () => async (dispatch) => {
  const response = await getTasks();
  // console.log("task actions", response);
  dispatch({
    type: GET_TASKS,
    payload: response.data,
  });
};

export const getTaskAction = () => async (dispatch) => {
  const response = await getTask();
  // console.log("task actions", response);
  dispatch({
    type: GET_TASK,
    payload: response.data,
  });
};

export const getUserOfferedTasksAction = () => async (dispatch) => {
  const response = await getUserOfferedTasks();
  console.log("task actions", response);
  dispatch({
    type: GET_USER_OFFERED_TASKS,
    payload: response,
  });
};

export const getUserReceivedTasksAction = () => async (dispatch) => {
  const response = await getUserReceivedTasks();
  console.log("task actions", response);
  dispatch({
    type: GET_USER_RECEIVED_TASKS,
    payload: response,
  });
};
