import { FAILURE_FROM, GET_FROM, SUCCESS_FROM } from "./actionTypes";

const init = {
  data: [],
  isLoading: false,
  isError: false,
};

export const fromreducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_FROM: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SUCCESS_FROM: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case FAILURE_FROM: {
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
