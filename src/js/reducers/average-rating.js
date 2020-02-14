import { CHANGE_AVERAGE_RATING } from "../constants/action-types";

const productId = (state = [], action) => {
  switch (action.type) {
    case CHANGE_AVERAGE_RATING:
      return action.payload;
    default:
      return state;
  }
};

export default productId;