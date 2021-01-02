import axios from 'axios'
import { API_URL } from './../../const'

export default (buyCurrency, sellCurrency) => 
  axios.get(`${API_URL}api/trade/spent?buyCurrency=${buyCurrency}&sellCurrency=${sellCurrency}`)