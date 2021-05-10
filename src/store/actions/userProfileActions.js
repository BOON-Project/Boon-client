import { getUserProfile } from "../../helpers/apiCalls";
import { GET_USER_PROFILE } from "./types";

export const getUsersAction = (userId) => async (dispatch) => {
	const response = await getUserProfile(userId);
	dispatch({
		type: GET_USER_PROFILE,
		payload: response.data,
	});
};
