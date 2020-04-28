import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/'
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

const api = axios

export default api
