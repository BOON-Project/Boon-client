import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
// import authenticationReducer from "./authReducer";


const allReducers = combineReducers({
    usersReducer,
    authReducer,
    errorReducer,
});

export default allReducers;