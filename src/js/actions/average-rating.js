import { CHANGE_AVERAGE_RATING } from "../constants/action-types";

const setProductId = (rating) => ({
  type: CHANGE_AVERAGE_RATING,
  payload: rating
});

export default setProductId;