import {getUsers} from "../../helpers/apiCalls";
import {GET_USERS} from "./types";


export const getUsersAction = () => async (dispatch)=>{
    const response = await getUsers();
    // console.log("get users action response", response.data);
    dispatch({
      type: GET_USERS,
      payload: response.data
    })
  }
