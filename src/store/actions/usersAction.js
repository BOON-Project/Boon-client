import { getUsers, getUsersBySkill } from "../../helpers/apiCalls";
import { GET_USERS, GET_USERS_BY_SKILL } from "./types";

export const getUsersAction = () => async (dispatch) => {
  const response = await getUsers();
  // console.log("get users action response", response.data);
  dispatch({
    type: GET_USERS,
    payload: response.data,
  });
};

//thunk makes the async possible and sends the API call through changing the return value of the action creator (instead of the just Object)
// this means first calls the api
// then gets the response into (Object) the payload

export const getUsersBySkillAction = () => async (dispatch) => {
  const response = await getUsersBySkill();
  console.log("we are looking for action", response);
  dispatch({
    type: GET_USERS_BY_SKILL,
    payload: response,
  });
};
