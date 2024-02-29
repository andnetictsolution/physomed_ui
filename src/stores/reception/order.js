import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const orderStore = defineStore('order', {
  state: () => ({
    order: {},
    patients: [],
    orders: [],
    queue: []
  }),
  getters: {
    getAllPatients(state) {
      return state.patients
    },
    getAllOrders(state) {
      return state.orders
    },
    getSingleOrder(state) {
      return state.order
    },
    getQueue(state) {
      return state.queue
    }
  },
  actions: {
    async createOrder(payload) {
      console.log(payload, 'payload')
      if (payload) {
        for (let i = 0; i < payload.length; i++) {
          const response = await axios.post('/api/orders/add', payload[i])
          console.log(response, 'response')
        }
      }
    },
    async fetchPatients() {
      let response = await axios.get('/api/patients/all')
      console.log('Fetch All patints', response)
      this.patients = response.data.patients
    },
    // async fetchOrders() {
    //   let response = await axios.get('/api/orders/all')
    //   console.log('Fetch All orders', response)
    //   this.orders = response.data.orders
    // },
    async fetchOrders() {
      let response = await axios.post('/api/queue/role', {
        role: localStorage.getItem('physomed_user_role_id')
      })
      console.log('Fetch All orders', response)
      this.queue = response.data.orders
    },
    async fetchFilteredOrders(payload) {
      let response = await axios.post('/api/orders/filter', payload)
      console.log('Fetch All orders', response)
      this.orders = response.data.orders
    },
    async fetchSingleOrder(id) {
      let response = await axios.get(`/api/orders/single/${id}`)
      console.log('Fetch All orders', response)
      this.order = response.data.order
    },
    async confirmPayment(payments) {
      console.log(payments)
      let response = await axios.post(`/api/payments/confirm`, payments.payments)
      let takeQueue = await axios.post('/api/queue/physiotherapy', {
        date: new Date(),
        patient_id: payments.patient_id,
      })
      console.log(takeQueue)
      console.log('Confirm payment', response)
    },
    async confirmCardPayment(payments) {
      let response = await axios.post(`/api/card/payment/confirm`, payments)
      console.log('Confirm payment', response)
    }
  }
})
