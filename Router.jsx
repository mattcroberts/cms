import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import {browserHistory as history} from 'react-router'
import {createStore, combineReducers, compose} from 'redux'
import reducers from './reducers'
import routes from './routes'

let initialState = window.__INITIAL_STATE__;
const reducer = combineReducers(reducers);
const store = createStore(reducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

render(
  <Provider store={store}>
  <Router children={routes} history={history}/>
</Provider>, document.getElementById('root'));
