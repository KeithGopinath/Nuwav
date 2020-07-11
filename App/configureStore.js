// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
// import rootWatchers from './sagas';
// import rootReducer from './reducers';


// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = composeWithDevTools({});
// export default function configureStore(preloadedState = {}) {
//   const store = createStore(
//     rootReducer,
//     preloadedState,
//     composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
//   );
//   sagaMiddleware.run(rootWatchers);
//   return store;
// }

import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'

/**
 * This import defaults to localStorage for web and AsyncStorage for react-native.
 *
 * Keep in mind this storage *is not secure*. Do not use it to store sensitive information
 * (like API tokens, private and sensitive data, etc.).
 *
 * If you need to store sensitive information, use redux-persist-sensitive-storage.
 * @see https://github.com/CodingZeal/redux-persist-sensitive-storage
 */
// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger'
import rootWatchers from './sagas';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: [
    // 'auth',
  ],
}

export default () => {
  const middleware = []
  const enhancers = []

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  enhancers.push(applyMiddleware(...middleware, logger))

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, compose(...enhancers))
  const persistor = persistStore(store)

  // Kick off the root saga
  sagaMiddleware.run(rootWatchers)

  return { store, persistor }
}