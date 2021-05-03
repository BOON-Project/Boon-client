import { GET_SKILLS } from "../actions/types";

const initialState = []


const skillsReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_SKILLS:
            const skills = action.payload;
            return skills
        default:
            return state
    }
}

export default skillsReducer;