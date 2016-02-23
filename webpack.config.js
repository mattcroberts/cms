var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './components/Index.jsx',
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
  },
  resolve: {
    root: [
      path.resolve('.')
    ],
    extensions: ['', '.js', '.jsx']
  },
  debug: false
};
