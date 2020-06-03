import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews=()=>{
   const reviews = this.props.reviews.filter(rev=>rev.restaurantId===this.props.restaurantId)
     
   return reviews.map((rev,index)=><Review key={index} review={rev} deleteReview={this.props.deleteReview}/>)

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