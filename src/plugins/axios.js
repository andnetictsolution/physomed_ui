import axios from 'axios'

// baseurl
axios.defaults.baseURL = 'http://192.100.100.4:4000/'
// axios.defaults.baseURL = 'http://127.0.0.1:4000'

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
