import { FAILURE_BUS, GET_BUS , SUCCESS_BUS } from "./actionTypes";

const init = {
  dataList: [],
  isLoading: false,
  isError: false,
};

export const busreducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_BUS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SUCCESS_BUS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case FAILURE_BUS: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};