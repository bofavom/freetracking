import axios from 'axios'
import { API_URL } from './../../const'

export default (currency = '') => 
  axios.get(`${API_URL}api/trade?currency=${currency}`)