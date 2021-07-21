import {createStore, combineReducers, applyMiddleware,compose} from "redux"
//import {reducer as AppReducer} from "./app/reducer"
//import {reducer as AuthReducer  } from "./Auth/reducer";
import {reducer} from "./Redux/reducer"
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
   // app : AppReducer,
    //auth : AuthReducer,
    reducer
});


const store = createStore(
   rootReducer,
   compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
   )
   );
//console.log(store.getState())
export {store}