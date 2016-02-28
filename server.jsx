import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import routes from './routes';
import NotFound from './components/404';
import createLocation from 'history/lib/createLocation';
import webpack from 'webpack';

const app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.use(function (req, res) {
  const location = createLocation(req.url);
  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if(err) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if(renderProps) {
      const componentAsString = ReactDOMServer.renderToString(<RouterContext { ...renderProps } />);
      res.render("main", {
          component: componentAsString
      });
    } else {
      const componentAsString = ReactDOMServer.renderToString(<NotFound/>);
      res.status(404)
        .render("main", {
          component: componentAsString
      });
    }

  });
});

app.listen(3000, () => console.log("Server started"));

export default app;
