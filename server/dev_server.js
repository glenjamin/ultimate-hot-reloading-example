require('css-modules-require-hook')({
  generateScopedName: function(exportedName, exportedPath) {
    // This path should match the localIdentName in your webpack.config.js.
    var path = exportedPath
              .substr(1)
              .replace(/\//g, "-")
              .replace('.css', '');

    return path + "-" + exportedName;
  }
});

import express from 'express';
import path from 'path';
import chokidar from 'chokidar';
import webpack from 'webpack';

import config from '../setup/webpack/dev_server.config';
import { port } from '../setup/environment';
import apiRoutes from '../setup/api_routes';
import page_router from './page_router';

const compiler = webpack(config);

const app = express();

app.use(express.static(path.join(__dirname, '..', 'www')));

// Serve hot-reloading bundle to client
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

// Include server routes as a middleware. These are used for the API
app.use((req, res, next) => {
  apiRoutes(req, res, next);
});

// Anything else gets passed to the client app's server rendering
// app.use(page_router);
app.get('*', function(req, res, next) {
  require('../client/server-render')(req.path, function(err, page) {
    if (err) return next(err);
    res.send(page);
  });
});

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
var watcher = chokidar.watch('../server');
watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /server/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
      if (/\/server\//.test(id)) delete require.cache[id];
    });
  });
});

// Do "hot-reloading" of react stuff on the server
// Throw away the cached modules and re-require next time
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





// import path from 'path';
// import express from 'express';
//
// import router from './router';
//
// const app = express();
//
//
// app.listen(port, (error) => {
//   if (error) {
//     console.error(error);
//     process.exit(10);
//   } else {
//     console.log(`Application is live at port: ${port}`);
//   }
// });
//
// export default app;
