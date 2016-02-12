'use strict';

import React from 'react';
import Item from './ItemComponent';

require('styles//PlacesItems.scss');

class PlacesItemsComponent extends React.Component {
  render() {
    return (
      <div className="placesitems-component">
        <ul>
          { this.props.items.map(item => <Item key={item.id} {...item}/>) }
        </ul>
      </div>
    );
  }
}

PlacesItemsComponent.displayName = 'PlacesItemsComponent';

// Uncomment properties you need
// PlacesItemsComponent.propTypes = {};
// PlacesItemsComponent.defaultProps = {};

export default PlacesItemsComponent;
