import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match } from 'react-router';
import routes from './routes';
import { browserHistory as history } from 'react-router'

match({ history, routes }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(<Router history={history} {...renderProps} />, document.getElementById('root'));
});
