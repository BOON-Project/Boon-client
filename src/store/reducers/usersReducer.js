import { EDIT_USER, GET_USERS, GET_USERS_BY_SKILL } from "../actions/types";

const initialState = {
  usersWithSkill: [],
  allUsers: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      // const users = action.payload;
      // return users;
      return { ...state, allUsers: action.payload };
    case GET_USERS_BY_SKILL:
      // const usersBySkill = action.payload;
      // return usersBySkill;
      return { ...state, usersWithSkill: action.payload };

    case EDIT_USER:
      return { ...state };
    default:
      return state;
  }
};

export default usersReducer;
