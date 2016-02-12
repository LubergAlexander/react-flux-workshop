'use strict';

import React from 'react';

require('styles//Search.scss');

class SearchComponent extends React.Component {
  render() {
    return (
      <div className="search-component">
        Search
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
