import express from 'express'
import createLocation from 'history/lib/createLocation'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Provider, connect} from 'react-redux'
import {RouterContext, match} from 'react-router'
import {createStore, combineReducers} from 'redux'
import {inspect} from 'util'
import NotFound from './components/404'
import reducers from './reducers'
import routes from './routes'

const app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.use(function(req, res) {
  const location = createLocation(req.url);
  const reducer = combineReducers(reducers);
  const store = createStore(reducer);
  const initialState = store.getState();

  match({
    routes,
    location
  }, (err, redirectLocation, renderProps) => {

    if (err) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const InitialComponent = (
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      )
      const componentAsString = ReactDOMServer.renderToString(InitialComponent);

      console.log("STATE:", initialState);

      res.render("main", {
        component: componentAsString,
        initialState: initialState
      });
    } else {
      const componentAsString = ReactDOMServer.renderToString(<NotFound/>);
      res.status(404).render("main", {
        component: componentAsString,
        initialState: initialState
      });
    }

  });
});

app.listen(3000, () => console.log("Server started"));

export default app;
