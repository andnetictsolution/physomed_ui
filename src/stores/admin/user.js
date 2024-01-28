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
    addNewUser(payload) {
      console.log(payload)
      axios.post('/user', { here: payload })
    }
  }
})

