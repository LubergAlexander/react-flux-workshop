'use strict';

export const ADD_ITEM = 'ADD_ITEM';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const SET_FILTER = 'SET_FILTER';

export function getAll() {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(items => dispatch(receiveItems(items)));
  };
}

export function addItem(item) {
  return (dispatch) => {
    fetch('http://localhost:3001/api/new',
      {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(item => dispatch(receiveOneItem(item)));
  };

}
export function receiveItems({items}) {
  return {
    type: RECEIVE_ITEMS,
    items
  }
}
export function receiveOneItem(item) {
  return {
    type: ADD_ITEM,
    item
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  };
}
