var fs = require('fs');

var React = require('react');

var App = require('./components/App');

/* eslint-disable no-sync */
var template = fs.readFileSync(__dirname + '/../index.html', 'utf8');
/* eslint-enable no-sync */

function renderApp(path, callback) {
  var store = require('./store')();

  var rendered = React.renderToString(
    <App state={store.getState()} />
  );

  var page = template
    .replace('<!-- CONTENT -->', rendered)
    .replace('"-- STORES --"', JSON.stringify(store.getState()));

  callback(null, page);
}

module.exports = renderApp;
