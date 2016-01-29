/* eslint-env browser */

var React = require('react');
var ReactDOM = require('react-dom');

var { Provider } = require('react-redux');

var store = require('./store')(window.initialStoreData);

var App = require('./components/App');

window.dev = { store };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
