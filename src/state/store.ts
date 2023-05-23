import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { RootState } from './types';
import rootReducer from './reducer';

import searchSagas from '../features/Search/state/sagas';

const sagas = createSagaMiddleware();
const middleware: [Middleware] = [sagas];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store: Store<RootState> = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

sagas.run(searchSagas);

export default store;
