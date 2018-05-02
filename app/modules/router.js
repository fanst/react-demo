import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect,IndexRoute } from 'react-router-dom';
import login from "./login/login.jsx";
import tab from "./tab/tab.jsx";
import notFound from './notFound/notFound.jsx';

export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={login} />
                    <Route path="/tab" component={tab} />
                    <Route path="/login" component={login} />
                    <Route path="/404" component={notFound} />
                    <Redirect to="/tab" />
                </Switch>
            </HashRouter>
        )
    }
};