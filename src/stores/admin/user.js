import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const userStore = defineStore('user', {
  state: () => ({
    user: {},
    users: []
  }),
  getters: {
    getAllUsers: (state) => {
      return state.users
    },
    getSingleUser: (state) => {
      return state.user
    },
    getAllUsersss(state) {
      return axios.get('/api/users')
        .then((response) => {
          state.users = response.data
          console.log("KKKK", response.data.users)
          return state.users
        })
    }
  },
  actions: {
    addNewUser(payload) {
      axios.post('/api/users/register', payload)
    },
    deletuser(payload) {
      axios.delete('/api/users/remove/', id)
    }
  }
})
