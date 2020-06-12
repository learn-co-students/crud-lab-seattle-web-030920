
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":{
            const res= {text: action.text, id: cuid() }
            return {...state, restaurants: [...state.restaurants, res]}
        }
        case "DELETE_RESTAURANT":{
            return {...state, restaurants: [...state.restaurants.filter(r=> r.id !== action.id)]}
        }
        case "ADD_REVIEW":{
            const rev={text: action.review.text, id: cuid(), restaurantId: action.review.restaurantId}
            return {...state, reviews: [...state.reviews, rev]}
        }
        case "DELETE_REVIEW":{
            return {...state, reviews: [...state.reviews.filter(r=> r.id !== action.id)]}
        }
        default: {
            return state
        }
    }
}
