require('babel/register');
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');

var express = require('express');

var chokidar = require('chokidar');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

var app = express();

// Serve hot-reloading bundle to client
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

//  Create hot-reloading bundle for server rendering
var basePath = require('path').resolve(__dirname, '.');
var webpackIsomorphicTools = new WebpackIsomorphicTools(require('./webpack-isomorphic-tools'))
    .development(true)
    .server(basePath, function() { });

// Include server routes as a middleware
app.use(function(req, res, next) {
  require('./server/app')(req, res, next);
});

// Anything else gets passed to the client app's server rendering
app.get('*', function(req, res, next) {
  require('./client/server-render')(req.path, function(err, page) {
    if (err) return next(err);
    res.send(page);
  });
});

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
var watcher = chokidar.watch('./server');
watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /server/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
      if (/\/server\//.test(id)) delete require.cache[id];
    });
  });
});

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
compiler.plugin('done', function() {
  console.log("Clearing /client/ module cache from server");
  Object.keys(require.cache).forEach(function(id) {
    if (/\/client\//.test(id)) delete require.cache[id];
  });
});

var http = require('http');
var server = http.createServer(app);
server.listen(3000, 'localhost', function(err) {
  if (err) throw err;

  var addr = server.address();

  console.log('Listening at http://%s:%d', addr.address, addr.port);
});
