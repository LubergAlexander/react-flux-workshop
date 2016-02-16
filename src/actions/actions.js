'use strict';
import {createAction} from 'redux-actions';

export const ADD_ITEM = 'ADD_ITEM';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const SET_FILTER = 'SET_FILTER';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const getAll = createAction(RECEIVE_ITEMS, () => {
  return fetch('http://localhost:3002/api/data')
    .then(handleErrors)
    .then(response => response.json())
});

const addItem = createAction(ADD_ITEM, (item) => {
  return fetch('http://localhost:3002/api/new', {
    method: 'post',
    body: JSON.stringify(item),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(handleErrors)
    .then(response => response.json())
});

const receiveItems = createAction(RECEIVE_ITEMS);
const setFilter = createAction(SET_FILTER);

export default {
  getAll,
  addItem,
  receiveItems,
  setFilter
}
