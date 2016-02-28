var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './Router.jsx',
  output: { path: __dirname + '/public/', filename: 'bundle.js' },
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
};
