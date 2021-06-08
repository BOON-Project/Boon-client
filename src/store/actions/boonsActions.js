import {ADD_BOONS, SUBSTRACT_BOONS} from './types'
import { addBoons, substractBoons } from '../../helpers/apiCalls'



//trying to add boons to wallet
export const addBoonsAction = (boons, status, senderId, taskId) => async(dispatch) => {
    const response = await addBoons(boons, status, senderId, taskId);
    console.log("addBoonsaction", response);
    dispatch({
        type: ADD_BOONS,
        payload: boons++
    })
}

//trying to add boons to wallet
export const substractBoonsAction = (boons, status, senderId, taskId) => async(dispatch) => {
    const response = await substractBoons(boons, status, senderId, taskId);
    console.log("asubstractBoonsaction", response);
    dispatch({
        type: SUBSTRACT_BOONS,
        payload: boons--
    })
}