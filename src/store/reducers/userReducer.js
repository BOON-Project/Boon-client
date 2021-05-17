import {
  SIGNUP_USER,
  LOGIN_USER,
  LOGOUT_USER,
  GET_USERS,
  EDIT_USER,
} from "../actions/types";
import {
  loadTokenFromStorage,
  loadUserFromStorage,
} from "../../helpers/localStorage";

// a reducer is a function that takes 2 parameters (initialState, action) and returns a copy of the state to the store
// every reducer needs:
// 1. initial state
// 2. logic conditions => if statement / switch case

const initialState = {
  user: loadUserFromStorage(),
  token: loadTokenFromStorage(),
};

const userReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case SIGNUP_USER:
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
      };

    case LOGOUT_USER:
      localStorage.clear();
      return {
        ...state,
        user: null,
        token: null,
      };

    case EDIT_USER:
      return state.user.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );

    default:
      return state;
  }
};

export default userReducer;
