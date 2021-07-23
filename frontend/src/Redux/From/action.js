import axios from "axios";
import { FAILURE_FROM, GET_FROM, SUCCESS_FROM } from "./actionTypes";

export const getfrom = () => {
  return {
    type: GET_FROM,
  };
};

export const successfrom = (payload) => {
  return {
    type: SUCCESS_FROM,
    payload,
  };
};

export const failurefrom = () => {
  return {
    type: FAILURE_FROM,
  };
};

export const getfromdata = () => (dispatch) => {
  dispatch(getfrom());
  axios
    .get("/from")
    .then((res) => {
      dispatch(successfrom(res.data.data));
    })
    .catch((err) => {
      dispatch(failurefrom());
    });
};

