import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    const { restaurants, addRestaurant, deleteRestaurant } = this.props

    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants restaurants={restaurants} deleteRestaurant={deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: input => dispatch({ type: "ADD_RESTAURANT", text: input.text }),
    deleteRestaurant: input => dispatch({ type: "DELETE_RESTAURANT", id: input })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
