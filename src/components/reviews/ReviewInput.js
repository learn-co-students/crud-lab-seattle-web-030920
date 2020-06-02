import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  onHandleChange = event => {
    this.setState({ text: event.target.value })
  }

  onHandleSubmit = event => {
    event.preventDefault()
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId })
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

export default ReviewInput;
