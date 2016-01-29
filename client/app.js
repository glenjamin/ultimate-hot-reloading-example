/* eslint-env browser */
import 'babel-core/register';
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// import configureStore from '../app/store';
// import routes from '../setup/page_routes';

// var ReactDOM = require('react-dom');
//
var store = require('./store')(window.initialStoreData);

var App = require('./components/App');

window.dev = { store };

function display() {
  render(
    <App state={store.getState()} dispatch={store.dispatch} />,
    document.querySelector('[data-js=app]')
  );
}

store.subscribe(display);
display();
