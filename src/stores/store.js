import {createStore, applyMiddleware} from 'redux';
import appReducer from './reducers';
import promiseMiddleware from 'redux-promise';

let store = createStore(
  appReducer,
  applyMiddleware(promiseMiddleware)
);

export default store;
