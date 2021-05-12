import { getSkills, getUsersBySkill } from "../../helpers/apiCalls";
import { GET_SKILLS, GET_SKILLS_BY_USER } from "./types";

export const getSkillsAction = () => async (dispatch) => {
  const response = await getSkills();
  dispatch({
    type: GET_SKILLS,
    payload: response.data,
  });
};

export const getUsersBySkillAction = () => async (dispatch) => {
  const response = await getUsersBySkill();
  dispatch({
    type: GET_SKILLS_BY_USER,
    payload: response.data,
  });
};
