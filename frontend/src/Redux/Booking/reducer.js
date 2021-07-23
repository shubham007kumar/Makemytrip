import {
    GET_BUS_DETAILS_FAIL,
    GET_BUS_DETAILS_REQUEST,
    GET_BUS_DETAILS_SUCCESS,
    UPDATE_BOOKING_DETAILS,
} from "./actionTypes";

const initState = {
    isLoading: false,
    isSuccess: false,
    isError: false,

    seats: [],
    passengerDetails: [],
    email: "",
    phoneNumber: "",
    fare: 0,
    busId: "",
    isInsurance: false,

};

export const busBookingReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_BUS_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            };

        case GET_BUS_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,

            };

        case UPDATE_BOOKING_DETAILS:
            return {
                ...state,
                [payload["key"]]: payload["value"],
                isLoading: false,
                isError: false,
                isSuccess: true,

            };

        case GET_BUS_DETAILS_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            };
        default:
            return state;
    }
};