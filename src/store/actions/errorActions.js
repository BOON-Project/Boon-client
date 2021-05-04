import { HIDE_ERROR, SET_ERROR } from "./types"


// errorActions.js
export function setErrorAction(error){
    return {
    type: SET_ERROR,
    error: error
    }
   }
   
   export function hideErrorAction(){
    return {
    type: HIDE_ERROR
    }
   }