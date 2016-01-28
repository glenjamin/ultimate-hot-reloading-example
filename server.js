require('css-modules-require-hook')({
  generateScopedName(exportedName, exportedPath) {
    // This path should match the localIdentName in your webpack.config.js.
    const path = exportedPath
              .substr(1)
              .replace(/\//g, "-")
              .replace('.css', '');
    return path + "-" + exportedName;
  }
});
require('babel-register');

const express = require('express');

const chokidar = require('chokidar');
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

const app = express();

// Serve hot-reloading bundle to client
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

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
const watcher = chokidar.watch('./server');

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

app.listen(3000, function(err) {
  if (err) throw err;

  console.log('Listening on port: 3000');
});
