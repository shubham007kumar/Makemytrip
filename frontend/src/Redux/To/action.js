import axios from "axios";
import { FAILURE_TO, GET_TO, SUCCESS_TO } from "./actionTypes";

export const getto = () => {
  return {
    type: GET_TO,
  };
};

export const successto = (payload) => {
  return {
    type: SUCCESS_TO,
    payload,
  };
};

export const failureto = () => {
  return {
    type: FAILURE_TO,
  };
};

export const gettodata = () => (dispatch) => {
  dispatch(getto());
  axios
    .get("/to")
    .then((res) => {
      dispatch(successto(res.data.data));
    })
    .catch((err) => {
      dispatch(failureto());
    });
};

