// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
//
// import rootReducer from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware(
//   thunk
// )(createStore);
//
// export default function configureStore(initialState) {
//   const store = createStoreWithMiddleware(rootReducer, initialState);
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducers', () => {
//       var nextRootReducer = require('./reducers');
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//   return store;
// }



// From 'client/store.js'

// var { createStore } = require('redux');
//
// module.exports = function configureStore(initialState) {
//   var store = createStore(require('./reducers'), initialState);
//
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducers', () => {
//       var nextRootReducer = require('./reducers');
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//
//   return store;
// };
