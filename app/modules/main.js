import reactDom from 'react-dom';
import React, { Component } from 'react';
import RouteConfig from "./router";
import "../src/style/main.css";

reactDom.render(
    <RouteConfig />,
    document.getElementById('root'),
);