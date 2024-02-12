import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const authStore = defineStore('authStore', {
  state: () => ({
    isAuthenticated: false,
    user: {}
  }),
  getters: {
    isAuthenticatedUser(state) {
      return state.isAuthenticated
    },
    getCurrentUser(state) {
      return state.user
    }
  },
  actions: {
    async login(payload) {
      console.log(payload)
      const response = await axios.post('/api/users/login', payload)
      console.log(response,"response here")
      if (!response) return
      console.log(response.data, 'response')
      const { first_name, last_name, role, phone, email, _id, token } = response.data

      this.isAuthenticated = true
      localStorage.setItem('physomed_token', token)
      localStorage.setItem('physomed_user_id', _id)
      localStorage.setItem('physomed_user_role', role)
      localStorage.setItem('physomed_user', first_name + ' ' + last_name)
      this.user = {
        first_name,
        last_name,
        role,
        phone,
        email,
        _id,
        token
      }
    },
    async logoutUser() {
      localStorage.removeItem('physomed_token')
      localStorage.removeItem('physomed_user_id')
      localStorage.removeItem('physomed_user_role')
      localStorage.removeItem('physomed_user')
      location.reload()
      this.isAuthenticated = false
    }
  }
})
