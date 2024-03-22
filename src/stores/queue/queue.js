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
    },
    async fetchNurseQueue() {
      const response = await axios.get('/api/queue/nurse')
      this.nurseQueue = response.data.queue
    },
    async addDrQueue(payload) {
      const response = await axios.post('/api/queue/doctor', payload)
    },
    async fetchDrQueue() {
      const response = await axios.get('/api/queue/doctor')
      this.drQueue = response.data.queue
    },
    async fetchReceptionQueue() {
      const response = await axios.get('/api/queue/reception')
      this.receptionQueue = response.data.queue
    },
    async fetchPhysioQueue() {
      const response = await axios.get('/api/queue/physiotherapy')
      this.physioQueue = response.data.queue
    }
  }
})
