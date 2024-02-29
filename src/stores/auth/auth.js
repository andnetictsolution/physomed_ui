import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const authStore = defineStore('authStore', {
  state: () => ({
    isAuthenticated: false,
    user: {},
    roles: [],
    title: ''
  }),
  getters: {
    isAuthenticatedUser(state) {
      return state.isAuthenticated
    },
    getCurrentUser(state) {
      return state.user
    },
    getRoles(state) {
      return state.roles
    },
    getTitle(state) {
      return state.title
    }
  },
  actions: {
    async login(payload) {
      console.log('inside pinia')
      console.log(payload)
      const response = await axios.post('/api/users/login', payload)
      console.log(response, 'response here')
      if (!response) return
      console.log(response.data, 'response')
      const { first_name, last_name, role, phone, email, _id, token } = response.data

      this.isAuthenticated = true
      localStorage.setItem('physomed_token', token)
      localStorage.setItem('physomed_user_id', _id)
      localStorage.setItem('physomed_user_role', role.name)
      localStorage.setItem('physomed_user_role_id', role._id)
      localStorage.setItem('physomed_user', first_name + ' ' + last_name)
      this.user = {
        first_name,
        last_name,
        role: role.name,
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
    },
    setTitle(title) {
      this.title = title
    },
    async fetchRoles() {
      const roles = await axios.get('/api/roles/all')
      this.roles = roles.data.roles
      console.log(roles, 'roles')
    }
  }
})
