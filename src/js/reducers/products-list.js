import { GET_PRODUCTS_LIST } from "../constants/action-types";

const productsListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default productsListReducer;
