import {
    helpCheckUser,
    helpCheckoutUser

  } from "../../helpers/apiCalls";
  import {  USER_LOGIN, USER_LOGOUT } from "./types";
  


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