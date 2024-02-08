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

  },
  actions: {
    addNewUser(payload) {
      axios.post('/api/users/register', payload)
    },
    deletuser(payload) {
      axios.delete('/api/users/remove/', id)
    },
    async fetchUsers() {
      let response = await axios.get('/api/users');
      console.log(response);
      this.users = response.data.users
    }
  }
})
