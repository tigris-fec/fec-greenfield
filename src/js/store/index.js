import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

const initialState = {
  productStyles: null,
  products: null,
  product_id: 1,
  current_item: {},
  average_rating: 0
};

const middlewares = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;
