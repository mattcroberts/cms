import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import routes from 'routes';
import createLocation from 'history/lib/createLocation';
import webpack from 'webpack';

const app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.use(function (req, res) {
  const location = createLocation(req.url);
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    console.log(renderProps);
    if(err) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if(renderProps) {
      const componentAsString = ReactDOMServer.renderToString(<RoutingContext { ...renderProps } />);
      res.render("main", {
          component: componentAsString
      });
    } else {
      res.status(404).send('Not Found');
    }

  });
});

app.listen(3000, () => console.log("Server started"));
