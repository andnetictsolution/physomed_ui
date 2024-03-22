import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const serviceStore = defineStore('serviceStore', {
  state: () => ({
    service: {},
    services: []
  }),
  getters: {
    getAllServices: (state) => {
      return state.services
    },
    getSingleService: (state) => {
      return state.service
    }
  },
  actions: {
    async addNewservice(payload) {
      await axios.post('/api/services/add', payload)
    },

    async fetchServices() {
      let response = await axios.get('/api/services/all')
      this.services = response.data.services
    },
    async fetchSingleService(id) {
      await axios.get('api/services/single/' + id).then((response) => {
        this.service = response.data.service
      })
    }
  }
})
