import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({text: event.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="textfield" onChange={this.handleOnChange} name="text" id="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
