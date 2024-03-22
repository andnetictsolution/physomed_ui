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
    }
  },
  actions: {
    async addNewUser(payload) {
      await axios.post('/api/users/register', payload).then((response) => {
        this.users.push(response.data.user)
      })
    },
    deletuser(payload) {
      axios.delete('/api/users/remove/', payload._id)
    },
    async updateUser(payload) {
      await axios.patch('/api/users/updateuser/' + payload.id, payload.user).then((response) => {
      }).catch((error)=>{
      })
    },
    async fetchUsers() {
      let response = await axios.get('/api/users/all')
      this.users = response.data.users
    },
    async fetchSingleUser(id) {
      await axios.get('/api/users/single/' + id).then((response) => {
        this.user = response.data.user
      })
    }
  }
})
