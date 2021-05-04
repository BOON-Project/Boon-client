// let's see if this works
import { HIDE_ERROR, SET_ERROR } from '../actions/types';

const initState = {
    error: null,
    isOpen: false
   };

export function errorReducer(state = initState, action){
    switch(action.type){
        case SET_ERROR:
         return {
            error: action.payload,
            isOpen: true
        } 
        case HIDE_ERROR:
            return initState 
        default:
            return state;
    }

}
export default errorReducer;