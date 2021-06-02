import {
    GET_TASK,
    GET_TASKS,
    GET_USER_RECEIVED_TASKS,
    GET_USER_OFFERED_TASKS,
    UPDATE_TASK,
    UPDATE_TASK_STATUS,
    UPDATE_TASK_RATING,
} from "../actions/types";

const initialState = {
    allTasks: [],
    authUserOfferedTasks: [],
    authUserReceivedTasks: [],
    task: {},
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                allTasks: action.payload,
            };

        case GET_TASK:
            return {
                ...state,
                task: action.payload,
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

        //modify status
        case UPDATE_TASK_STATUS:
            console.log("hey aghy", action.payload);

            return {
                ...state,
                task: {
                    ...state.task,
                    status: action.payload,
                },
            };
        case UPDATE_TASK_RATING:
            console.log("hey aghy", action.payload);
            return {
                ...state,
                task: {
                    ...state.task,
                    rating: action.payload,
                },
            };

        // case ADD_TASK_MESSAGE:
        //   return {
        //     ...state,
        //   };

        default:
            return state;
    }
};

export default tasksReducer;
