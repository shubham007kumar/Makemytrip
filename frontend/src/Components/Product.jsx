import { useLocation } from "react-router-dom";
import React from "react";

function Product({props}) {
    const {state} = useLocation()

 return  <div> hey {console.log(state.from,state.to, state.month, state.day, state.year)}</div>;
}

export { Product };
