import { ADD_USER, EDIT_USER} from "../actions/types";
import { helpEditUser} from "../../helpers/apiCalls";

// a reducer is a function that takes 2 parameters (initialState, action) and returns a copy of the state to the store
// every reducer needs:
// 1. initial state
// 2. logic conditions => if statement / switch case

const initialState = {
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export const editUserAction = (formData) => async (dispatch, getState) => {
  const userId = getState().user.user._id;

  const response = await helpEditUser(userId, formData);
  console.log("formData from Action");
  dispatch({
    type: EDIT_USER,
    payload: response.data,
  });
};

export default usersReducer;