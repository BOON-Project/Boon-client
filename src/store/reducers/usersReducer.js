<<<<<<< HEAD
import { ADD_USER, EDIT_USER} from "../actions/types";
import { helpEditUser} from "../../helpers/apiCalls";
=======
import { GET_USERS} from "../actions/types";
>>>>>>> 2eef8de5f486ecd0fdf94065cdcbd42961364a35

const initialState = []

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      const users = action.payload;
      return users
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