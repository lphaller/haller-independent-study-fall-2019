import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
import About from "./About";
import Login from "./Login";

const Router =  () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/recipeSearch" component={RecipeSearch} />
            <Route path="/about" component={About} />
            <Route path="/Login" component={Login} />
        </Switch>
    </BrowserRouter>
)

export default Router;