var fs = require('fs');

var React = require('react');

var { createStore } = require('redux');
var { Provider } = require('react-redux');

var reducer = require('./reducers');
var App = require('./components/App');

/* eslint-disable no-sync */
var template = fs.readFileSync(__dirname + '/../index.html', 'utf8');
/* eslint-enable no-sync */

function renderApp(path, callback) {
  var store = createStore(reducer);

  var rendered = React.renderToString(
    <Provider store={store}>
      {() => <App />}
    </Provider>
  );

  var page = template
    .replace('<!-- CONTENT -->', rendered)
    .replace('"-- STORES --"', JSON.stringify(store.getState()));

  callback(null, page);
}

module.exports = renderApp;
