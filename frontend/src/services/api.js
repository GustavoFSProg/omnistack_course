import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'

// axios.interceptors.request.use(
//   (config) => {
//     return { ...config, headers: { 'Content-Type': 'application/json' } }
//   },

//   (error) => {
//     const { status } = error.response

//     if (status === 401) {
//       localStorage.clear()
//       window.location = '/'
//     }
//     return Promise.reject(error)
//   }
// )

export const getIncidentsByOngId = async (ongId) => {
  // Passando o Id como parâmentro OK!
  const data = await axios.get(`/profile/${ongId}`)

  // Passando o Id pelo headers
  // const data = await axios({
  //   method: 'get',
  //   url: '/profile',
  //   headers: { ong_id: ongId },
  // })

  // Passando o Id pelo body
  // O segundo parametro: aqui tu passa o objeto json da mesma forma q tu
  // preparou pra receber no back (req.body)
  // const data = await axios.get('/profile', { ong_id: ongId})
  return data
}

const api = axios

export default api
