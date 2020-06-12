import React, { Component } from 'react';

class ReviewInput extends Component {
  state={
    text: ""
  }

  handleChange=e=>{
    this.setState({text: e.target.value})
  }

  handleSubmit=e=>{
    e.preventDefault()
    this.props.onAdd({...this.state, restaurantId: this.props.restaurantId})
    this.setState({text: ""})
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Review:  </label>
        <input type="text" name= "text" onChange={this.handleChange} value={this.state.text}/>
        <input type="submit"/>
      </form>
    );
  }
};

export default ReviewInput;
