import { combineReducers } from "redux";
import productStylesReducer from "./product-styles";
import productsListReducer from "./products-list";
import productId from "./product-id.js";
import currentItem from "./current-item.js";
import averageRating from "./average-rating.js"

const rootReducer = combineReducers({
  productStyles: productStylesReducer,
  products: productsListReducer,
  product_id: productId,
  current_item: currentItem,
  average_rating: averageRating
});

export default rootReducer;
