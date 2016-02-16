'use strict';

import React from 'react';
import Detail from './DetailComponent';
import PlacesItems from './PlacesItemsComponent';
import Search from './SearchComponent';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import getMatchingItems from '../stores/selectors';
import actions from '../actions/actions';

import 'normalize.css';
import 'styles/App.scss';

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    items: getMatchingItems(state.items, state.filter),
    totalItems: state.items.length
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

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
        <span>{this.props.totalItems}</span>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
