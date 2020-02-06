import axios from "axios";
import { API } from "../constants/action-types";
import { accessDenied, apiError, apiStart, apiEnd } from "../actions/greenfield-api";

// Setups requred redux middleware with typical setup
const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);
  // Dismisses irrelevant action types
  if (action.type !== API) {
    return;
  }
  // Extracts important variables from the action payload
  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;

  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  // Handles globals -- accounts for some authorization layer
  axios.defaults.baseUrl = process.env.REACT_APP_BASE_URL || "";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  if (label) {
    dispatch(apiStart(label));
  }
  // Makes the actual network request, handle errors, and invoke callbacks
  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch((error) => {
      dispatch(apiError(error));
      dispatch(onFailure(error));

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
