import { CHANGE_CURRENT_ITEM } from "../constants/action-types";

const productId = (state = [], action) => {
  switch (action.type) {
    case CHANGE_CURRENT_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default productId;