export const updatePrice = price => ({
  type: 'UPDATE_PRICE',
  price: price
})

export const updateBalance = (amount, currency) => ({
  type: 'UPDATE_BALANCE',
  amount: amount,
  currency: currency
})