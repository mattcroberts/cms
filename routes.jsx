import React  from 'react'
import { Route, IndexRoute } from 'react-router'
import App  from './components/App'
import Home  from './components/Home'
import Login  from './components/Login'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/login" component={Login}/>
  </Route>
);
