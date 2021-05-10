import { GET_USER_PROFILE } from "../actions/types";

const initialState = [];

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_PROFILE:
			const users = action.payload;
			return users;
		default:
			return state;
	}
};

export default usersReducer;
