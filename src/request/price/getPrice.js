import axios from 'axios'
import { API_URL } from './../../const'

export default () => 
  axios.get(`${API_URL}api/price?pair=BTCEUR`)