import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const { restaurant, reviews, addReview, deleteReview } = this.props

    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews reviews={reviews} deleteReview={deleteReview} restaurantId={restaurant.id} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: input => dispatch({ type: "ADD_REVIEW", text: input.text, restaurantId: input.restaurantId }),
    deleteReview: input => dispatch({ type: "DELETE_REVIEW", id: input })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
