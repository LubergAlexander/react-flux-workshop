import AppDispatcher from './AppDispatcher';
import {ReduceStore} from 'flux/utils';
let _items = [];
class ItemStore extends ReduceStore {
  getInitialState() {
    return {
      items: [],
      filter: ''
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'RECEIVE_ITEMS':
        return Object.assign({}, state, {
          items: action.items
        });

      case 'ADD_ITEM':
        return Object.assign({}, state, {
          items: [...state.items, action.item]
        });

      case 'SET_FILTER':
        return Object.assign({}, state, {
          filter: action.filter
        });

      default:
        return state;
    }
  }

  getState() {
    let {items, filter} = super.getState();
    return {
      filter,
      items: items.filter(item => item.title.match(`^.*${filter}.*$`)),
      totalItems: items.length
    }
  }

  getAll() {
    return _items;
  }

}

export default new ItemStore(AppDispatcher);
