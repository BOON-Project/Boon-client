import { getSkills } from "../../helpers/apiCalls"
import { GET_SKILLS } from "./types";
  
export const getSkillsAction = () => async (dispatch) => {
    const response = await getSkills();
    dispatch({
       type: GET_SKILLS,
        payload: response.data,
    });
   };