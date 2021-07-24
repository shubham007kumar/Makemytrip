import { Route, Switch } from "react-router-dom";
import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home";
import { AboveFooterSection } from "../Footer/AboveFooterSection";
import { Product } from "../Product";
import { Bus } from "../BusDetail/Bus";

function Routes() {
  return (
    <>
     
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product">
          <Bus/>
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
