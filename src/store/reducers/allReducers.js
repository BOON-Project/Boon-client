import { combineReducers } from "redux";
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import skillsReducer from './skillsReducer'
// import authenticationReducer from "./authReducer";


const allReducers = combineReducers({
    usersReducer,
    userReducer,
    authReducer,
    skillsReducer
});

export default allReducers;