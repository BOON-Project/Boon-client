import { helpCheckUser, helpCheckoutUser } from "../../helpers/apiCalls";
import { USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGOUT } from "./types";

export const userLoginAction = (formData) => async (dispatch) => {
  try {
    const response = await helpCheckUser(formData);
    if (!response.message) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response,
      });
      return;
    }
    throw new Error(response.message);
  } catch (err) {
    dispatch({
      type: USER_LOGIN_ERROR,
      payload: err.message,
    });
  }
};

export const userLogoutAction = () => async (dispatch) => {
  const response = await helpCheckoutUser();

  dispatch({
    type: USER_LOGOUT,
    payload: response.data,
  });
};
