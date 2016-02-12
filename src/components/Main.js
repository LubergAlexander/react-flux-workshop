require('normalize.css');
require('styles/App.scss');

import React from 'react';
import Search from './SearchComponent';
import PlacesItems from './PlacesItemsComponent';
import Detail from './DetailComponent';

function _getAppState() {
  return {
    items: [
      {id: 1, title: 'Item 1'},
      {id: 2, title: 'Item 2'},
      {id: 3, title: 'Item 3'}
    ]
  };
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    const newItem = Object.assign({}, item, {id: Date.now()});
    this.setState({
      items: [...this.state.items, newItem]
    });
  }

  render() {
    return (
      <div className="index">
        <h3>GoPlaces</h3>
        <Search />
        <PlacesItems items={this.state.items}/>
        <Detail addItem={this.addItem}/>
        <span>{this.state.items.length} Items</span>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
