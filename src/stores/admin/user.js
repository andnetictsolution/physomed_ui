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
    async addNewUser(payload) {
      console.log(payload,"payload")
      await axios.post('/api/users/register', payload).then((response)=>{
        console.log(response);
        this.users.push(response.data.user)
      })
    },
    deletuser(payload) {
      console.log("Inside delete")
      axios.delete('/api/users/remove/', payload._id)
    },
    async fetchUsers() {
      let response = await axios.get('/api/users/all');
      console.log(response);
      this.users = response.data.users
    }
  }
})
