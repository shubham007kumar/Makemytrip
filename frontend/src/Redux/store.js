import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { busBookingReducer } from "./Booking/reducer";
import { busreducer } from "./Bus/reducer";
import { fromreducer } from './From/reducer';
import { toreducer } from './To/reducer';

const rootReducer = combineReducers({
  Bus: busreducer,
  From: fromreducer,
  To: toreducer,
  Booking: busBookingReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);