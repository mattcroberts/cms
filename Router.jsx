import React  from 'react'
import ReactDOM  from 'react-dom'
import { Router, match } from 'react-router'
import { browserHistory as history } from 'react-router'
import routes  from './routes'

match({ history, routes }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(<Router history={history} {...renderProps} />, document.getElementById('root'));
});
