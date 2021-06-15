import {
    getTask,
    getTasks,
    getUserOfferedTasks,
    getUserReceivedTasks,
    editTask,
} from "../../helpers/apiCalls";
import {
    GET_TASKS,
    GET_TASK,
    GET_USER_OFFERED_TASKS,
    GET_USER_RECEIVED_TASKS,
    UPDATE_TASK_STATUS,
    UPDATE_TASK_RATING,
} from "./types";

export const getTasksAction = () => async (dispatch) => {
    const response = await getTasks();
    // console.log("task actions", response);
    dispatch({
        type: GET_TASKS,
        payload: response,
    });
};

export const getTaskAction = (id) => async (dispatch) => {
    const response = await getTask(id);
    console.log("task actions 123", response);
    dispatch({
        type: GET_TASK,
        payload: response,
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

// EDIT TASK (STATUS OR RATING)
export const editTaskStatusAction = (id, status) => async (dispatch) => {
    const response = await editTask(id, { status });
    console.log("task actions", response);
    dispatch({
        type: UPDATE_TASK_STATUS,
        payload: status,
    });
};

//rating actions =>

export const editTaskRatingAction = (id, rating) => async (dispatch) => {
    const response = await editTask(id, { rating });
    console.log("edit rating", response);
    dispatch({
        type: UPDATE_TASK_RATING,
        payload: rating,
    });
};
