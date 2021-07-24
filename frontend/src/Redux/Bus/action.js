import axios from "axios";
import { FAILURE_BUS, GET_BUS, SUCCESS_BUS } from "./actionTypes";

export const getbus = () => {
  return {
    type: GET_BUS,
  };
};

export const successbus = (payload) => {
  return {
    type: SUCCESS_BUS,
    payload,
  };
};

export const failurebus = () => {
  return {
    type: FAILURE_BUS,
  };
};

export const getbusdata = () => async (dispatch) => {
   dispatch(getbus())
 await  axios.get(`/bus`)
   .then((res)=>{
     dispatch(successbus(res.data.data))
   })
   .catch((err)=>{
     dispatch(failurebus())
   })
};

