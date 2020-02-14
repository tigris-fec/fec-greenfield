/**
 * These are action types.
 * When the page loads, we initiate the GET_PRODUCTS_LIST action and
 * fetch all the data from the server and save it inside the Redux store.
 *
 */

export const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";
export const GET_PRODUCTS_LIST_SUCCESS = "GET_PRODUCTS_LIST_SUCCESS";

export const GET_PRODUCT_STYLES = "GET_PRODUCT_STYLES";
export const GET_PRODUCT_STYLES_SUCCESS = "GET_PRODUCT_STYLES_SUCCESS";

export const ADD_PRODUCT_REVIEW = "ADD_PRODUCT_REVIEW";

export const DELETE_PRODUCT_REVIEW = "DELETE_PRODUCT_REVIEW";

export const ADD_TO_CART = "ADD_TO_CART"; 

export const CHANGE_PRODUCT_ID = "CHANGE_PRODUCT_ID";

export const CHANGE_CURRENT_ITEM = "CHANGE_CURRENT_ITEM";
export const CHANGE_AVERAGE_RATING = "CHANGE_AVERAGE_RATING";
