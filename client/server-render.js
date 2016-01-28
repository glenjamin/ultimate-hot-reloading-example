const fs = require('fs');

const React = require('react');

const { Provider } = require('react-redux');

const { renderToString } = require('react-dom/server');

const App = require('./components/App');

/* eslint-disable no-sync */
const template = fs.readFileSync(__dirname + '/../index.html', 'utf8');
/* eslint-enable no-sync */

function renderApp(path, callback) {
  const store = require('./store')();
  const state = store.getState();

  const rendered = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const page = template
    .replace('<!-- CONTENT -->', rendered)
    .replace('"-- STORES --"', JSON.stringify(state));

  callback(null, page);
}

module.exports = renderApp;
