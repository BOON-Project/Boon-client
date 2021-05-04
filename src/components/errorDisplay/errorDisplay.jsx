import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HIDE_ERROR } from '../../store/actions/types';

const ErrorNotification = (props) => {
 const isOpen = useSelector(state => state.errorReducer.isOpen);
 const error = useSelector(state => state.errorReducer.error);

 const dispatch = useDispatch();

 function handleClose(){
 dispatch({ type: HIDE_ERROR });
 }

 return (
 <>
 {isOpen && error && (
 <div class="fancy-error-class">
 <button onClick={handleClose} >Close Error</button>
 <span>{error}</span>
 </div>
 )}
 </>
 )
}

export default ErrorNotification;
