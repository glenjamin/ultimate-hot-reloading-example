/* eslint-env browser */

import App from './components/App';
import configureStore from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const store = configureStore(window.initialStoreData);
window.dev = { store };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
