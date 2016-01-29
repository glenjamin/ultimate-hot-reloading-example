// These routes reflect those used by views in the application.

import React from 'react';

import HomePage from '../app/views/pages/HomePage';

const routes = {
  IndexRoute: {
    component: HomePage,
  },
  // ExampleRoute: {
  //   path: 'example',
  //   component: Example
  // },
};

// const getChildRoutes = () => {
//   let childRoutes = [];
//   for (let key in routes) {
//     if (key !== 'IndexRoute') {
//       childRoutes.push(routes[key]);
//     }
//   }
//   return childRoutes;
// };

// export const path = (route) => {
//   return '/'.concat(routes[route].path || '');
// };

export default {
  path: '/',
  component: HomePage,
  indexRoute: routes.IndexRoute,
  // childRoutes: getChildRoutes()
};
