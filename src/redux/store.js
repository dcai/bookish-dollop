import { compose, applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';

const middlewares = [];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const defaultStore = {};
const store = createStore(
  rootReducer,
  defaultStore,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
