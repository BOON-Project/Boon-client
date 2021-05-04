import { USER_SIGNUP,
USER_SIGNUP_SUCCESS,
USER_SIGNUP_ERROR,
} from "../actions/types";

// a reducer is a function that takes 2 parameters (initialState, action) and returns a copy of the state to the store
// every reducer needs:
// 1. initial state
// 2. logic conditions => if statement / switch case

const initialState = {
  error: {},
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,}
      };

    case USER_SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state;
  }
};

export default usersReducer;