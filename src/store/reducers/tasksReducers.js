import {
    GET_TASKS,
    GET_USER_RECEIVED_TASKS,
    GET_USER_OFFERED_TASKS,
} from "../actions/types";

const initialState = {
    allTasks: [],
    authUserOfferedTasks: [],
    authUserReceivedTasks: [],
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                allTasks: action.payload,
            };

        case GET_USER_OFFERED_TASKS:
            return {
                ...state,
                authUserOfferedTasks: action.payload,
            };

        case GET_USER_RECEIVED_TASKS:
            return {
                ...state,
                authUserReceivedTasks: action.payload,
            };

        default:
            return state;
    }
};

export default tasksReducer;
