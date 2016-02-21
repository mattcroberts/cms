import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Index from './components/Index';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack';

const app = express();

const compiler = webpack({
  entry: './components/Index.jsx',
  output: {
    path: '/'
  },
  module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
});

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/public/'
}));

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    const index = React.createFactory(Index)();
    const componentAsString = ReactDOMServer.renderToString(index);
    res.render("main", {
        component: componentAsString
    });

});

app.listen(3000, () => console.log("Server started"));
export default app;
