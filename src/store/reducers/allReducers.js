import { combineReducers } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import skillsReducer from "./skillsReducer";
import errorReducer from "./errorReducer";
import tasksReducer from "./tasksReducers";

const allReducers = combineReducers({
	usersReducer,
	userReducer,
	skillsReducer,
	errorReducer,
	tasksReducer,
});

export default allReducers;
