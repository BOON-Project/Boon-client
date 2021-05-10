import { GET_USERS} from "../actions/types";

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


export default usersReducer;