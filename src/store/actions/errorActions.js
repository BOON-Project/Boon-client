import { HIDE_ERROR, SET_ERROR } from "./types";

// errorActions.js
export function setErrorAction(error) {
	console.log(error);
	return {
		type: SET_ERROR,
		payload: error,
	};
}

export function hideErrorAction() {
	return {
		type: HIDE_ERROR,
	};
}
