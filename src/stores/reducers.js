'use strict';

import {RECEIVE_ITEMS, ADD_ITEM, SET_FILTER} from './actions';

function itemsReducer(state = [], action) {

  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;

    case ADD_ITEM:
      return [...state, action.item];

    default:
      return state;
  }

}

function filterReducer(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export default function appReducer(state = {}, action) {
  return {
    filter: filterReducer(state.filter, action),
    items: itemsReducer(state.items, action)
  }
}
