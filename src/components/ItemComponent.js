'use strict';

import React from 'react';
import 'styles/Item.scss';

class ItemComponent extends React.Component {
  render() {
    return (
      <li className="item-component">
        {this.props.title}
      </li>
    );
  }
}

ItemComponent.displayName = 'ItemComponent';

// Uncomment properties you need
ItemComponent.propTypes = {
  title: React.PropTypes.string.isRequired
};
// ItemComponent.defaultProps = {};

export default ItemComponent;
