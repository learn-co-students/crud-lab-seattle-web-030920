import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
 
  render() {
    const { reviews, restaurantId, onDelete } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId)
    return (
      <ul>
         {associatedReviews.map(review => <Review key={review.id} review={review} onDelete={onDelete} />)}
      </ul>
    );
  }
};

export default Reviews;