import { CHANGE_CURRENT_ITEM } from "../constants/action-types";

const setProductId = (item) => ({
  type: CHANGE_CURRENT_ITEM,
  payload: item
});

export default setProductId;