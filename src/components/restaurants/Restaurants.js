import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = () => {
    const { restaurants, deleteRestaurant } = this.props
    return restaurants.map(restaurant => {
      return <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} />
    })
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;