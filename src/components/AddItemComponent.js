'use strict';

import React from 'react';

require('styles//AddItem.scss');

class AddItemComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: ''
    };
  }

  updateTitleInput(event) {
    this.setState({titleInput: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem({title: this.state.titleInput});
    this.setState({titleInput: ''});
  }

  render() {
    return (
      <div className="additem-component">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="title">Title
            <input
              required
              id="title"
              type="text"
              value={this.state.titleInput}
              onChange={this.updateTitleInput.bind(this)}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

AddItemComponent.displayName = 'AddItemComponent';

// Uncomment properties you need
// AddItemComponent.propTypes = {};
// AddItemComponent.defaultProps = {};

export default AddItemComponent;
