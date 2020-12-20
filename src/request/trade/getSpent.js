import axios from 'axios'

export default (buyCurrency, sellCurrency) => 
  axios.get(`http://localhost:15646/api/trade/spent?buyCurrency=${buyCurrency}&sellCurrency=${sellCurrency}`)