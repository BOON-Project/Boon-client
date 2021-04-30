import {
    helpCheckUser,
    helpCheckoutUser

  } from "../../helpers/apiCalls";
  import {  USER_LOGIN, USER_LOGOUT } from "./types";



export const userLoginAction = (formData) => async (dispatch) => {
    const response = await helpCheckUser(formData);
  try {
    dispatch({
      type: USER_LOGIN,
     payload: response.data,
   });

  } catch (error) {
    console.log(error)
  }



   };

   export const userLogoutAction = () => async (dispatch) => {
    const response = await helpCheckoutUser();
try {
  dispatch({
    type: USER_LOGOUT,
   payload: response.data,
 });

} catch (error) {
  console.log(error)
}
   };