/* eslint-env browser */

var React = require('react');
var ReactDOM = require('react-dom');

var store = require('./store')(window.initialStoreData);

var App = require('./components/App');

window.dev = { store };

function render() {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch} />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
