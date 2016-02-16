import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import appReducer from './reducers';

let store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;
