import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Page1 from "./page1/page1.jsx";
import Page2 from "./page2/page2.jsx";

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="border2">
                    <p>welcome!</p>
                </div>

                <HashRouter>
                    <div className="imgBg">
                        <ul role="nav">
                            <li><NavLink to="/tab/index/page1">Page1</NavLink></li>
                            <li><NavLink to="/tab/index/page2/90">Page2</NavLink></li>
                        </ul>

                        <Switch>
                            <Route path="/tab/index/page1" component={Page1} />
                            <Route path="/tab/index/page2/:id" component={Page2} />
                            <Route path="/*" exact component={Page1} />
                            <Redirect to="/tab/index" />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}