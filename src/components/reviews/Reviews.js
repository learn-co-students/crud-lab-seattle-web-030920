import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => {
    const { reviews, restaurantId, deleteReview } = this.props
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId)
    return associatedReviews.map(review => <Review key={review.id} review={review} deleteReview={deleteReview} />)
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;