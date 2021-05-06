import { getTasks } from "../../helpers/apiCalls";
import { GET_TASKS } from "./types";

export const getTasksAction = () => async (dispatch) => {
	const response = await getTasks();
	// console.log("task actions", response);
	dispatch({
		type: GET_TASKS,
		payload: response.data,
	});
};
