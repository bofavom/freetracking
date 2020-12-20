import axios from 'axios'

export default (currency = '') => 
  axios.get(`http://localhost:15646/api/trade?currency=${currency}`)