import { Route, Switch } from "react-router-dom";
import React from 'react';
import {Navbar} from '../Navbar/Navbar';
import { Home } from "../Home";
import { AboveFooterSection } from "../Footer/AboveFooterSection";

function Routes(){
    return (
      
    <>
     <Navbar/>
            <Switch>
                <Route exact path='/'>
                   <Home/>
                </Route>
            
            </Switch>
    <AboveFooterSection/>
    </>
    )
}

export default Routes;