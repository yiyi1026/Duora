import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const configurestore = (preloadedStore = {}) => (
  createStore(
    RootReducer,
    preloadedStore,
    // applyMiddleware(thunk, logger)
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default configurestore;
