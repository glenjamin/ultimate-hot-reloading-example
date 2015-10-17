var path = require('path');
var webpack = require('webpack');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

module.exports = {
  devtool: '#eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/app.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    webpackIsomorphicToolsPlugin.development()
  ],
  resolve: {
    extensions: ['', '.js'],
    alias: {
      request: 'browser-request'
    }
  },
  module: {
    loaders: [
    // Javascript
    {
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'client'),
      query: {
        optional: ['runtime'],
        plugins: [
          'react-display-name',
          'react-transform'
        ],
        extra: {
          'react-transform': [{
            'target': 'react-transform-hmr',
            'imports': ['react'],
            'locals': ['module']
          }]
        }
      }
    },

    // CSS
    {
      test: /\.css$/,
      include: path.join(__dirname, 'client'),
      loader: 'style!css?modules&importLoaders=1&localIdentName=[path][name]-[local]'
    },

    // Image
    {
      test: /\.(png|jpg|jpeg|png|gif|svg)$/, loader: 'url?limit=8192'
    }
    ]
  }
};
