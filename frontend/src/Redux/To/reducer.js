import { FAILURE_TO, GET_TO, SUCCESS_TO } from "./actionTypes";

const init = {
  data: [],
  isLoading: false,
  isError: false,
};

export const toreducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_TO: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SUCCESS_TO: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case FAILURE_TO: {
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
