import {ADD_BOONS, SUBSTRACT_BOONS} from "../actions/types";

const initialState = {
    boonsHave : 0,
    history: []
};

function handleChange(state, to) {
const {boonsHave, history} = state;
return({
  boonsHave: boonsHave + to,
  history: [boonsHave + to, ...history]
})
}
const boonsReducer = (state = initialState, action) => {
  const {boonshave, history} = state;

    switch (action.type) {

      //adding boons
      case ADD_BOONS:

        return handleChange(state,+1);

        //decrement case
      case SUBSTRACT_BOONS:

        return handleChange(state,-1)

      default:
        return state;
    }
  };



export default boonsReducer;