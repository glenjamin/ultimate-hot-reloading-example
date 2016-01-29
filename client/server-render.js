var fs = require('fs');

var React = require('react');

var { Provider } = require('react-redux');

var { renderToString } = require('react-dom/server');

var App = require('./components/App');

/* eslint-disable no-sync */
var template = fs.readFileSync(__dirname + '/../index.html', 'utf8');
/* eslint-enable no-sync */

function renderApp(path, callback) {
  var store = require('./store')();
  var state = store.getState();

  var rendered = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  var page = template
    .replace('<!-- CONTENT -->', rendered)
    .replace('"-- STORES --"', JSON.stringify(state));

  callback(null, page);
}

module.exports = renderApp;
