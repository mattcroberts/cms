import React from 'react';
import { Route } from 'react-router';
import Login from 'components/Login';
import Home from 'components/Home';

export default (
  <Route path="login" component={Login}/>,
  <Route path="/" component={Home}/>
);
