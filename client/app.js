/* eslint-env browser */

const React = require('react');
const ReactDOM = require('react-dom');

const { Provider } = require('react-redux');

const store = require('./store')(window.initialStoreData);

const App = require('./components/App');

window.dev = { store };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
