import { GET_USERS, GET_USERS_BY_SKILL } from "../actions/types";

const initialState = {
  usersWithSkill: [],
  allUsers: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      // const users = action.payload;
      // return users;
      return {
        allUsers: action.payload,
      };
    case GET_USERS_BY_SKILL:
      // const usersBySkill = action.payload;
      // return usersBySkill;
      return {
        usersWithSkill: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
