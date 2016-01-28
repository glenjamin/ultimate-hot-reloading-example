/* eslint-env browser */
const React = require('react');

const { Provider } = require('react-redux');

const DOM = require('react-dom');

const store = require('./store')(window.initialStoreData);

const App = require('./components/App');

window.dev = { store };

DOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
