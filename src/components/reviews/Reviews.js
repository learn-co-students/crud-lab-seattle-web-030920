import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
       {this.props.reviews.filter(review => 
          review.restaurantId === this.props.restaurantId).map(
          review => <Review review={review} 
          delete={this.props.delete} 
          key={review.id} 
          restaurantId={this.props.restaurantId}/>)}
      </ul>
    );
  }
};

export default Reviews;