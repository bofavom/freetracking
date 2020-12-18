import { combineReducers } from 'redux'

export const price = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PRICE':
      return {
        ...state,
        price: action.price
      }
    default:
      return state
  }
}

export default combineReducers({
  price,
})