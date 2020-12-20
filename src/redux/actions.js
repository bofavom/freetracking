export const updatePrice = price => ({
  type: 'UPDATE_PRICE',
  price: price
})

export const updateBalance = (amount, currency) => ({
  type: 'UPDATE_BALANCE',
  amount: amount,
  currency: currency
})

export const updateSpent = (amount, buyCurrency, sellCurrency) => ({
  type: 'UPDATE_SPENT',
  amount: amount,
  buyCurrency: buyCurrency,
  sellCurrency: sellCurrency
})