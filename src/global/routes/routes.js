import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Navegation from '../../components/navegation/index';
import Nation from '../../components/nation/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Navegation}/>
            <Route path="/nation/:id" component={Nation}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;

