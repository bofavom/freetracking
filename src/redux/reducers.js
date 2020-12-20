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

const tradeDefaultState = {
  balance: '',
  spent: '',
}

export const trade = (state = tradeDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_BALANCE':
      return {
        ...state,
        balance: {
          ...state.balance,
          [action.currency]: action.amount
        }
      }
    case 'UPDATE_SPENT':
      return {
        ...state,
        spent: {
          ...state.spent,
          [`${action.buyCurrency}${action.sellCurrency}`]: action.amount
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  price, trade
})