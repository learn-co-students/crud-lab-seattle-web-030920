import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = ()=>
    this.props.restaurants.map(res => 
      <Restaurant restaurant={res} key={res.id} deleteRest = {this.props.deleteRest}/>)
  
  render() {
    return(
      <ul>
      {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;