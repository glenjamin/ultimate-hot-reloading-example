/* eslint-env browser */

var React = require('react');

var { createStore } = require('redux');
var { Provider, connect } = require('react-redux');

var reducer = require('./reducers');
var store = createStore(reducer, window.initialStoreData);

var App = require('./components/App');
var ConnectedApp = connect(state => state)(App);

React.render(
  <Provider store={store}>
    {() => <ConnectedApp />}
  </Provider>,
  document.getElementById('root')
);
