import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from '../app/store';
import routes from '../setup/page_routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.querySelector('[data-js=app]');

render(
  <Provider store={store}>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  rootElement
);
