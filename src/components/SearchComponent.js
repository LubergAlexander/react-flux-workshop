'use strict';

import React from 'react';
import ItemActions from '../flux/ItemActions';

require('styles//Search.scss');

class SearchComponent extends React.Component {
  setSearchQuery(event) {
    ItemActions.setFilter(event.target.value);
  }

  render() {
    return (
      <div className="search-component">
        <input type="text" placeholder="Search" onChange={this.setSearchQuery}/>
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
