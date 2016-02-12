require('normalize.css');
require('styles/App.scss');

import React from 'react';
import Search from './SearchComponent';
import PlacesItems from './PlacesItemsComponent';
import Detail from './DetailComponent';
import ItemStore from '../flux/ItemStore';

function _getAppState() {
  return { items: ItemStore.getAll()};
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.addItem = this.addItem.bind(this);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  addItem(item) {

    // fetch('http://localhost:3001/api/new',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify(item),
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(serverItem => {
    //     this.setState({
    //       items: [...this.state.items, serverItem]
    //     })
    //   });

  }

  onStoreChange() {
    console.log('4. In the view');
    this.setState(_getAppState());
  }

  componentDidMount() {
    ItemStore.on('change', this.onStoreChange)
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
