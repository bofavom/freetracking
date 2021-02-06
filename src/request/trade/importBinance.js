import axios from 'axios'
import { API_URL } from './../../const'

export default (xlsxFile) => {
  const formData = new FormData()
  formData.append('xlsx', xlsxFile)

  return axios.post(`${API_URL}api/trade/binance`, formData)
}