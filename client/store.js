var { createStore } = require('redux');

module.exports = function configureStore(initialState) {
  var store = createStore(require('./reducers'), initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      var nextRootReducer = require('./reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
