import { GET_TASKS } from "../actions/types";

const initialState = [];

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TASKS:
			const tasks = action.payload;
			return tasks;
		default:
			return state;
	}
};

export default tasksReducer;
