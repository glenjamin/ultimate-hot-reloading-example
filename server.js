require('babel/register');

var express = require('express');

var app = express();

var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

// Serve hot-reloading bundle to client
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
compiler.plugin('done', function() {
  console.log("Clearing /client/ module cache from server");
  Object.keys(require.cache).forEach(function(id) {
    if (/\/client\//.test(id)) delete require.cache[id];
  });
});

app.get('*', function(req, res, next) {
  require('./client/server-render')(req.path, function(err, page) {
    if (err) return next(err);
    res.send(page);
  });
});

var http = require('http');
var server = http.createServer(app);
server.listen(3000, 'localhost', function(err) {
  if (err) throw err;

  var addr = server.address();

  console.log('Listening at http://%s:%d', addr.address, addr.port);
});
