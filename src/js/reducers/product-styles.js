import { GET_PRODUCT_STYLES } from "../constants/action-types";

const productStylesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCT_STYLES:
      return action.payload;
    default:
      return state;
  }
};

export default productStylesReducer;
