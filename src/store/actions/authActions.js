import {
    helpCheckUser,
    helpCheckoutUser,
    helpEditUser

  } from "../../helpers/apiCalls";
  import {  USER_LOGIN, USER_LOGOUT, EDIT_USER } from "./types";
  


export const userLoginAction = (formData) => async (dispatch) => {
    const response = await helpCheckUser(formData);
  
     dispatch({
       type: USER_LOGIN,
      payload: response.data,
    });
   };

   export const userLogoutAction = () => async (dispatch) => {
    const response = await helpCheckoutUser();
  
     dispatch({
       type: USER_LOGOUT,
      payload: response.data,
    });
   };

   export const editUserAction = (formData) => async (dispatch, getState) => {
    const userId = getState().authReducer.user._id;
  
    const response = await helpEditUser(userId, formData);
    console.log("formData from Action");
    dispatch({
      type: EDIT_USER,
      payload: response.data,
    });
  };