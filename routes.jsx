import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import AllBlogs from './components/AllBlogs'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/blogs" component={AllBlogs}/>
  </Route>
);
