
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state={restaurants:[],
        reviews:[]
    }, action) {

    switch(action.type){
        case "ADD_RESTAURANT":
            const newR = {
                id: cuidFn(),
                text:action.text
            }
            return {
                ...state,
                restaurants: [ ...state.restaurants, newR]
              }
            // {...state, restaurants:state.restaurants.concat(newR)}

        case "DELETE_RESTAURANT":
           const restaurants= state.restaurants.filter(res=> res.id!==action.id)
        return {...state,restaurants}
        
        case "ADD_REVIEW":
            const newReview={ id:cuidFn(), restaurantId: action.review.restaurantId, text:action.review.text}
            return{ ...state,
                reviews: [...state.reviews, newReview]
              }

        case "DELETE_REVIEW":
            const reviews = state.reviews.filter(rev=>rev.id!==action.id)
            return {...state,reviews}
        default:
            return state
    }
}
