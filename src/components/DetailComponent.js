'use strict';

import React from 'react';
import AddItem from './AddItemComponent';

require('styles//Detail.scss');

class DetailComponent extends React.Component {
  render() {
    return (
      <div className="detail-component">
        <AddItem addItem={this.props.addItem}/>
      </div>
    );
  }
}

DetailComponent.displayName = 'DetailComponent';

// Uncomment properties you need
// DetailComponent.propTypes = {};
// DetailComponent.defaultProps = {};

export default DetailComponent;
