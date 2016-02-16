'use strict';

import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {ADD_ITEM, RECEIVE_ITEMS, SET_FILTER} from '../actions/actions';

const initialItems = [];
const items = handleActions({
  [ADD_ITEM]: {
    next: (state, action) => [...state, action.payload],
    throw: (state)=> state
  },
  [RECEIVE_ITEMS]: {
    next: (state, action) => action.payload.items,
    throw: () => []
  }
}, initialItems);

const initialFilter = '';
const filter = handleActions({
  [SET_FILTER]: (state, action) => action.payload
}, initialFilter);

export default combineReducers({items, filter})
