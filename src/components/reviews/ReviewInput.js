import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({text: event.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId)
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

export default ReviewInput;
