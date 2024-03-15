import axios from 'axios'

// baseurl for haf pc
// axios.defaults.baseURL = 'http://192.168.1.106:5000/'

// base url for localhost
// axios.defaults.baseURL = 'http://localhost:4000'

// base url for physioMed pc
axios.defaults.baseURL = 'http://192.168.100.4:4000/'

// for outgoing requests
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('physomed_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

//for incoming response
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('physomed_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default axios
