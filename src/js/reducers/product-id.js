import { CHANGE_PRODUCT_ID } from "../constants/action-types";

const productId = (state = [], action) => {
  switch (action.type) {
    case CHANGE_PRODUCT_ID:
      return action.payload;
    default:
      return state;
  }
};

export default productId;