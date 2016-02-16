'use strict';

import ItemActions from './ItemActions';

const API = {
  getAllItems(){
    console.log('1. In Api');

    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(json => ItemActions.receiveItems(json.items))
      .catch(error => console.error('ERROR HAPPENED'));
  },

  createNewItem(item) {
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
      .then(json => {
        console.log('calling itemActions with ' + json);
        ItemActions.receiveOneItem(json)
      })
      .catch(error => console.error('ERROR HAPPENED'));
  }
};

export default API;