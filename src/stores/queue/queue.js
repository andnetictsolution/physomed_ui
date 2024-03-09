import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const queueStore = defineStore('queue', {
  state: () => ({
    drQueue: [],
    nurseQueue: [],
    receptionQueue: [],
    physioQueue: []
  }),
  getters: {
    getDrQueue(state) {
      return state.drQueue
    },
    getNurseQueue(state) {
      return state.nurseQueue
    },
    getReceptionQueue(state) {
      return state.receptionQueue
    },
    getPhysioQueue(state) {
      return state.physioQueue
    }
  },
  actions: {
    async addNurseQueue(payload) {
      const response = await axios.post('/api/queue/nurse', payload)
      console.log(response)
    },
    async fetchNurseQueue() {
      const response = await axios.get('/api/queue/nurse')
      console.log(response)
      this.nurseQueue = response.data.queue
    },
    async addDrQueue(payload) {
      const response = await axios.post('/api/queue/doctor', payload)
      console.log(response)
    },
    async fetchDrQueue() {
      const response = await axios.get('/api/queue/doctor')
      console.log(response,"doctor")
      this.drQueue = response.data.queue
    },
    async fetchReceptionQueue() {
      const response = await axios.get('/api/queue/reception')
      console.log(response,"reception")
      this.receptionQueue = response.data.queue
    },
    async fetchPhysioQueue() {
      const response = await axios.get('/api/queue/physiotherapy')
      console.log(response,"physiotherapy")
      this.physioQueue = response.data.queue
    }
  }
})
