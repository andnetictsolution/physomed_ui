import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientCardPaymentStore = defineStore('patientCardPayment', {
  state: () => ({
    patientPayments: [],
    onePatientPayments: []
  }),
  getters: {
    getAllPayments(state) {
      return state.patientPayments
    },
    getOnePatientPayments(state) {
      return state.onePatientPayments
    }
  },
  actions: {
    async fetchPatientPayments() {
      let response = await axios.get('/api/payments/all')
      console.log('Fetch All patints', response)
      this.patientPayments = response.data.payments
    },
    async fetchTodayPatientPayments() {
      let response = await axios.post('/api/payments/filter', { order_created_date: new Date() })
      console.log('Fetch All patints', response)
      this.patientPayments = response.data.payments
    },
    async fetchOnePatientPayments(payload) {
      let response = await axios.post('/api/payments/filter', payload)

      console.log('payment detail', response)
      this.onePatientPayments = response.data.payments
    }
  }
})
