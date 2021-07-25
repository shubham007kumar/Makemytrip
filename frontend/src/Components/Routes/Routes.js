import { Route, Switch } from "react-router-dom";
import React from "react";
import { Home } from "../Home";
import { AboveFooterSection } from "../Footer/AboveFooterSection";
import { Product } from "../Product";
import { BusBookingDetails } from "../BusBooking/BusBookingDetails";
import { Nav } from "../Navbar/Nav";
import { Bus } from "../BusDetail/Bus";
function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product">
          <Product />
          <Bus />
        </Route>
        <Route exact path="/booking-seats">
          <BusBookingDetails />
        </Route>

      </Switch>
    </>
  );
}

export default Routes;
