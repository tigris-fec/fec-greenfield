import { EXAMPLE_ACTION } from "../constants/action-types";

export const addItem = (payload) => {
  return { type: EXAMPLE_ACTION, payload };
};
