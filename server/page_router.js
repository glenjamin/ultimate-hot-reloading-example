import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../setup/page_routes';
import configureStore from '../app/store';
import renderFullPage from './html';

export default function handleMatch(req, res) {
  const location = req.path;
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps === null) {
      res.status(404).send('Not found');
    } else if (error) {
      res.status(500).send(error.message);
    } else if (renderProps) {
      const store = configureStore({});
      const componentHTML = renderToString(
        <Provider store={store} >
          <RouterContext {...renderProps} />
        </Provider>
      );
      const finalState = store.getState();
      const html = renderFullPage(componentHTML, finalState);
      res.status(200).send(html);
    }
  });
}
