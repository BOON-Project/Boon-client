import {
    getTasks,
    getUserOfferedTasks,
    getUserReceivedTasks,
} from "../../helpers/apiCalls";
import {
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

export const getUserOfferedTasksAction = (userId) => async (dispatch) => {
    const response = await getUserOfferedTasks(userId);
    // console.log("task actions", response);
    dispatch({
        type: GET_USER_OFFERED_TASKS,
        payload: response.data,
    });
};

export const getUserReceivedTasksAction = (userId) => async (dispatch) => {
    const response = await getUserReceivedTasks(userId);
    // console.log("task actions", response);
    dispatch({
        type: GET_USER_RECEIVED_TASKS,
        payload: response.data,
    });
};
