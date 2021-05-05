import { combineReducers } from "redux";
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import skillsReducer from './skillsReducer'
import errorReducer from './errorReducer'
// import authenticationReducer from "./authReducer";


const allReducers = combineReducers({
    usersReducer,
    userReducer,
    skillsReducer,
    errorReducer
});

export default allReducers;