import { CHANGE_PRODUCT_ID } from "../constants/action-types";

const setProductId = (id) => ({
  type: CHANGE_PRODUCT_ID,
  payload: id
});

export default setProductId;