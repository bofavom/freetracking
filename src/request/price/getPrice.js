import axios from 'axios'

export default () => 
  axios.get('http://localhost:15646/api/price?pair=BTCEUR')