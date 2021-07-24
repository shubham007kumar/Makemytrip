import axios from "axios";
import {
    GET_BUS_DETAILS_FAIL,
    GET_BUS_DETAILS_REQUEST,
    GET_BUS_DETAILS_SUCCESS,
    UPDATE_BOOKING_DETAILS,
} from "./actionTypes";

const busDetailsRequest = () => {
    return {
        type: GET_BUS_DETAILS_REQUEST,
    };
};

const busDetailsSuccess = (payload) => {
    return {
        type: GET_BUS_DETAILS_SUCCESS,
        payload,
    };
};

export const updateBookingDetails = (payload) => {
    return {
        type: UPDATE_BOOKING_DETAILS,
        payload,
    };
};

const busDetailsFail = () => {
    return {
        type: GET_BUS_DETAILS_FAIL,
    };
};

// export const getBusDetails = () => (dispatch) => {
//     dispatch(busDetailsRequest());
//     axios
//         .get(`/bookings/`)
//         .then((res) => dispatch(busDetailsSuccess(res.data)))
//         .catch((err) => dispatch(busDetailsFail()));
// };