import { combineReducers } from "redux";
import productStylesReducer from "./product-styles";
import productsListReducer from "./products-list";
import productId from "./product-id.js"

const rootReducer = combineReducers({
  productStyles: productStylesReducer,
  products: productsListReducer,
  product_id: productId
});

export default rootReducer;
