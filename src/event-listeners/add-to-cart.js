import { ADD_TO_CART } from "../js/constants/action-types.js";

/**
 * Creates the event listener for adding to cart
 */
const addedToCart = (event, eventHistory) => {
  window.dataLayer.push(...event);
  return event;
};

addedToCart.eventType = ADD_TO_CART;

export default addedToCart;
