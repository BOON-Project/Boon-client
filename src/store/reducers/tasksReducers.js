import { GET_TASKS } from "../actions/types";

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

        default:
            return state;
    }
};

export default tasksReducer;
