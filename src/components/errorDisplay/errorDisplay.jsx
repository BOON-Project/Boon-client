import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HIDE_ERROR } from "../../store/actions/types";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const ErrorDisplay = (props) => {
	const isOpen = useSelector((state) => state.errorReducer.isOpen);
	const error = useSelector((state) => state.errorReducer.error);

	const dispatch = useDispatch();

	const closeError = () => dispatch({ type: HIDE_ERROR });

	if (isOpen) {
		setTimeout(closeError, 6000);
	}

	return (
		<>
			{isOpen && (
				<Alert onClose={closeError} autoHideDuration={6000} severity="error">
					{error}
				</Alert>
			)}
		</>
	);
};

export default ErrorDisplay;
