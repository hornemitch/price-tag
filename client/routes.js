import React from "react";
import { render } from "react-dom"
import { Router, Route, IndexRoute, browserHistory} from "react-router";
import { App } from "../imports/client/components/app";
import { Welcome } from "../imports/client/components/welcome";
import { Login } from "../imports/client/components/login"
import { Register } from "../imports/client/components/register"
import { AdminProduct } from "../imports/client/components/admin-product"
import { Cpu } from "../imports/client/components/cpu"
import { Gpu } from "../imports/client/components/gpu"
import { Chassis } from "../imports/client/components/chassis"
import { Motherboard } from "../imports/client/components/motherboard"
import { Storage } from "../imports/client/components/storage"

const requireAdmin = (nextState, replace) => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname },
        });
    }
    else if(Meteor.user().Roles[0] != "admin"){
        window.alert("Snooping around is not nice");
        replace({
            pathname: '/',
            state: { nextPathname: nextState.location.pathname }
        });
    }
};

Meteor.startup( () => {
    render(
        <Router history = { browserHistory }>
            <Route path='/' component={ App }>
                <IndexRoute component={ Welcome }/>
                <Route path="login" component={ Login }/>
                <Route path="register" component={ Register }/>
                <Route path="admin/products" component={ AdminProduct } onEnter={ requireAdmin }/>
                <Route path="admin/cpu" component={ Cpu } onEnter={ requireAdmin }/>
                <Route path="admin/gpu" component={ Gpu } onEnter={ requireAdmin }/>
                <Route path="admin/chassis" component={ Chassis } onEnter={ requireAdmin }/>
                <Route path="admin/motherboard" component={ Motherboard } onEnter={ requireAdmin }/>
                <Route path="admin/storage" component={ Storage } onEnter={ requireAdmin }/>
            </Route>
        </Router>,
        document.getElementById("react-root")
    );
});