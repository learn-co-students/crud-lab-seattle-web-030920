import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  onHandleChange = event => {
    this.setState({ text: event.target.value })
  }

  onHandleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({ text: "" })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <input value={this.state.text} onChange={this.onHandleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
