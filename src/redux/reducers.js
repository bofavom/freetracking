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

export const trade = (state = { balance: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_BALANCE':
      return {
        ...state,
        balance: {
          ...state.balance,
          [action.currency]: action.amount
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  price, trade
})