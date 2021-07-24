import { Route, Switch } from "react-router-dom";
import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home";
import { AboveFooterSection } from "../Footer/AboveFooterSection";
import { Product } from "../Product";
import { BusBookingDetails } from "../BusBooking/BusBookingDetails";

function Routes() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/booking-seats">
          <BusBookingDetails />
        </Route>
      </Switch>
      <AboveFooterSection />
    </>
  );
}

export default Routes;
