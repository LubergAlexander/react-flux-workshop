import AppDispatcher from './AppDispatcher';
const ItemActions = {
  receiveItems: function (data) {
    console.log('2. In Actions');

    AppDispatcher.dispatch({
      type: 'RECEIVE_ITEMS',
      items: data.items
    });
  }
};

export default ItemActions;
