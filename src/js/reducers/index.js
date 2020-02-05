import { EXAMPLE_ACTION } from "../constants/action-types";

const initialState = {
  data: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === EXAMPLE_ACTION) {
    return Object.assign({}, state, {
      data: state.data.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;
