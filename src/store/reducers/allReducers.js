import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import authReducer from './authReducer';
// import authenticationReducer from "./authReducer";


const allReducers = combineReducers({
    usersReducer,
    authReducer
});

export default allReducers;