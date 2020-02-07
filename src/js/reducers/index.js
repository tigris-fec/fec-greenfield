import { combineReducers } from "redux";
import productStylesReducer from "./product-styles";
import productsListReducer from "./products-list";

const rootReducer = combineReducers({
  productStyles: productStylesReducer,
  products: productsListReducer
});

export default rootReducer;
