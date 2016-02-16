'use strict';

import React from 'react';

require('styles//Search.scss');

class SearchComponent extends React.Component {
  render() {
    return (
      <div className="search-component">
        <input type="text" placeholder="Search" onChange={(event) => this.props.setFilter(event.target.value)}/>
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
