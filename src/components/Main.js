require('normalize.css');
require('styles/App.scss');

import Detail from './DetailComponent';
import ItemActions from '../flux/ItemActions';
import ItemStore from '../flux/ItemStore';
import PlacesItems from './PlacesItemsComponent';
import React from 'react';
import Search from './SearchComponent';
import {Container} from 'flux/utils';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  static getStores() {
    return [ItemStore];
  }

  static calculateState() {
    return ItemStore.getState()
  }

  addItem(item) {
    ItemActions.addItem(item);
  }

  componentDidMount() {
    ItemActions.getAll();
  }

  render() {
    return (
      <div className="index">
        <h3>GoPlaces</h3>
        <Search />
        <PlacesItems items={this.state.items}/>
        <Detail addItem={this.addItem}/>
        <span>{ItemStore.getState().totalItems} Items</span>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default Container.create(AppComponent);
