import { combineReducers } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import skillsReducer from "./skillsReducer";
import errorReducer from "./errorReducer";
import tasksReducer from "./tasksReducers";
import messagesReducer from "./messagesReducer"
import usersChatReducer from "./usersChatReducer"

const allReducers = combineReducers({
	usersReducer,
	userReducer,
	skillsReducer,
	errorReducer,
	tasksReducer,
	messagesReducer,
	usersChatReducer
});

export default allReducers;
