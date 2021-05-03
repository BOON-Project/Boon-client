import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import skillsReducer from './skillsReducer'
// import authenticationReducer from "./authReducer";


const allReducers = combineReducers({
    usersReducer,
    authReducer,
    skillsReducer
});

export default allReducers;