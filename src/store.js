import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //for exporting functions as props
import rootReducer from "./reducers/main.js";

const initialState = {
  dummystate: []
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
