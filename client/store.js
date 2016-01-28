const { createStore } = require('redux');

module.exports = function configureStore(initialState) {
  const store = createStore(require('./reducers'), initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
