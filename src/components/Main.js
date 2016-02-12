require('normalize.css');
require('styles/App.scss');

import React from 'react';
import Search from './SearchComponent';
import PlacesItems from './PlacesItemsComponent';
import Detail from './DetailComponent';

function _getAppState() {
  return {items: []};
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.addItem = this.addItem.bind(this);
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

  componentDidMount() {
    // //noinspection JSUnresolvedFunction
    // fetch('http://localhost:3001/api/data')
    //   .then(response => response.json())
    //   .then(json => this.setState(json));
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
