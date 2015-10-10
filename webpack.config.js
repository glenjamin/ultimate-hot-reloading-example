var path = require('path');
var webpack = require('webpack');

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
    new webpack.NoErrorsPlugin()
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
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path][name]-[local]'
    }

    ]
  }
};
