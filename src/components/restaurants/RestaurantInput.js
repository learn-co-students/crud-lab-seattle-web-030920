import React, { Component } from 'react';

class RestaurantInput extends Component {
  state={
    text: ""
  }

  handleChange=e=>{
    this.setState({text: e.target.value})
  }

  handleSubmit=e=>{
    e.preventDefault()
    this.props.onAdd(this.state.text)
    this.setState({text: ""})
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Restaurant Name:  </label>
        <input type="text" name= "text" onChange={this.handleChange} value={this.state.text}/>
      </form>
    );
  }
};

export default RestaurantInput;
