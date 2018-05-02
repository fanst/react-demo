import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import index from "../index/index.jsx";
import menus from "../menus/menus.jsx";
import orders from "../orders/orders.jsx";
import orderStatistics from "../orderStatistics/orderStatistics.jsx";
import menuStatistics from "../menuStatistics/menuStatistics.jsx";
import employee from "../employee/employee.jsx";

//模块
export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/tab/index" component={index} />
                <Route path="/tab/menus" component={menus} />
                <Route path="/tab/orders" component={orders} />
                <Route path="/tab/orderStatistics" component={orderStatistics} />
                <Route path="/tab/menuStatistics" component={menuStatistics} />
                <Route path="/tab/employee" component={employee} />
                <Route path="/*" exact component={index} />
                <Redirect to="/tab/index" />
            </Switch>
        )
    }
};