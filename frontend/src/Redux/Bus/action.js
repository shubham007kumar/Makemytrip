import axios from "axios";
import { FAILURE_BUS, GET_BUS, SUCCESS_BUS } from "./actionTypes";

export const getcart = () => {
  return {
    type: GET_BUS,
  };
};

export const successcart = (payload) => {
  return {
    type: SUCCESS_BUS,
    payload,
  };
};

export const failurecart = () => {
  return {
    type: FAILURE_BUS,
  };
};

export const getbusdata = () => (dispatch) => {
  
};

