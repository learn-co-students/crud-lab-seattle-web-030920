import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} onAdd={this.props.addReview}/>
        <Reviews onDelete= {this.props.deleteReview} reviews={this.props.reviews} restaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}

const mapStateToProps=state=>{
  return {reviews: state.reviews}
}

const mapDisatchToProps= dispatch =>{
  return {
    addReview: review=>dispatch({type: "ADD_REVIEW", review}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
  }
}


export default connect(mapStateToProps, mapDisatchToProps)(ReviewsContainer)
