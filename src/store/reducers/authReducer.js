import { USER_LOGIN, USER_LOGOUT } from "../actions/types";
const initialState = {
  user: {
    avatar: "/statics/avatar.png",
    _id: "608a7b96df0b0817bc45336d",
    firstName: "trehdfgdgft",
    lastName: "hfgffdsf",
    userName: "newusernam123",
    email: "email2222@gmail.com",
    birthday: "2020-10-23T00:00:00.000Z",
    password: "Josiecat1234!",
  },
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      const loggedUser = {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

      return loggedUser;

    case USER_LOGOUT:
      localStorage.clear();
      const loggedOutUser = {
        ...state,
        user: {},
      };

      return loggedOutUser;

    default:
      return state;
  }
};
export default authenticationReducer;
