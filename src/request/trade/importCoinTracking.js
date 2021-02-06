import axios from 'axios'
import { API_URL } from './../../const'

export default (csvFile) => {
  const formData = new FormData()
  formData.append('csv', csvFile)

  return axios.post(`${API_URL}api/trade/cointracking`, formData)
}