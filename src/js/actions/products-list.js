import { GET_PRODUCTS_LIST } from "../constants/action-types";

const setProductsList = (productsList) => ({
  type: GET_PRODUCTS_LIST,
  productsList: productsList
});

export default setProductsList;
