import {helpAddUser} from "../../helpers/apiCalls";
import { ADD_USER} from "./types";
  
  export const addUserAction = (formData) => async (dispatch) => {
    const response = await helpAddUser(formData);
    dispatch({
      type: ADD_USER,
      payload: response.data,
    });
  };
  
   
  

  
//   export const logoutUserAction = () => async (dispatch) => {
//     const response = await helpCheckoutUser();
  
//     dispatch({
//       type: USER_LOGOUT,
//       payload: response.data,
//     });
//   };
  