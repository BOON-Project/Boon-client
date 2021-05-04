import { SIGNUP_USER, LOGIN_USER} from "../actions/types";

// a reducer is a function that takes 2 parameters (initialState, action) and returns a copy of the state to the store
// every reducer needs:
// 1. initial state
// 2. logic conditions => if statement / switch case

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;