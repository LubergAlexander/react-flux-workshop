'use strict';
import AppDispatcher from './AppDispatcher';
import API from '../flux/API';

const ItemActions = {
  getAll: function () {
    API.getAllItems();
  },
  receiveItems: function (items) {
    console.log('2. In Actions');

    AppDispatcher.dispatch({
      type: 'RECEIVE_ITEMS',
      items
    });
  },

  addItem: function (item) {
    API.createNewItem(item);
  },

  receiveOneItem: function (item) {
    AppDispatcher.dispatch({
      type: 'ADD_ITEM',
      item
    });
  },

  setFilter: function(filter) {
    AppDispatcher.dispatch({
      type: 'SET_FILTER',
      filter
    });
  }
};

export default ItemActions;
