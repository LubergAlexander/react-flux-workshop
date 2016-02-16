'use strict';

require('normalize.css');
require('styles/App.scss');

import Detail from './DetailComponent';
import PlacesItems from './PlacesItemsComponent';
import React from 'react';
import Search from './SearchComponent';
import {connect} from 'react-redux';
import getMatchingItems from '../redux/selectors';
import {getAll, addItem, setFilter} from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    items: getMatchingItems(state.items, state.filter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(getAll()),
    addItem: (item) => dispatch(addItem(item)),
    setFilter: (filter) => dispatch(setFilter(filter))
  };
};

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    return (
      <div className="index">
        <h3>GoPlaces</h3>
        <Search setFilter={this.props.setFilter}/>
        <PlacesItems items={this.props.items}/>
        <Detail addItem={this.props.addItem}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
