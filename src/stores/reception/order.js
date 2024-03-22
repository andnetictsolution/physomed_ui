import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const orderStore = defineStore('order', {
  state: () => ({
    order: {},
    patients: [],
    orders: [],
    queue: [],
    patientOrder: []
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
    },
    getPatientOrder(state) {
      return state.patientOrder
    }
  },
  actions: {
    async createOrder(payload) {
      if (payload) {
        for (let i = 0; i < payload.length; i++) {
          const response = await axios.post('/api/orders/add', payload[i])
        }
        let queue = await axios.post('/api/queue/reception', {
          date: new Date(),
          patient_id: payload[0].patient
        })
      }
    },
    async fetchPatients() {
      let response = await axios.get('/api/patients/all')
      this.patients = response.data.patients
    },
    async filterPatients(payload) {
      let response = await axios.post('/api/patients/filter',payload)
      this.patients = response.data.patients
      // console.log(this.patients)
    },
    async fetchOrders() {
      let response = await axios.post('/api/queue/role', {
        role: localStorage.getItem('physomed_user_role_id')
      })
      this.queue = response.data.orders
    },
    async fetchFilteredOrders(payload) {
      let response = await axios.post('/api/orders/filter', payload)
      this.orders = response.data.orders
    },
    async fetchSingleOrder(id) {
      let response = await axios.get(`/api/orders/single/${id}`)
      this.order = response.data.order
    },
    async fetchSinglePatientOrder(id) {
      let response = await axios.post(`/api/orders/filter`, { patient: id })
      this.patientOrder = response.data.orders
    },
    async confirmPayment(payments) {
      await axios
        .post(`/api/payments/confirm`, {
          payments: payments.payments,
          payment_method: payments.paymentMethod
        })
        .then(async (res) => {
          await axios.post('/api/queue/physiotherapy', {
            date: new Date(),
            patient_id: payments.patient_id
          })
        })
    },
    async confirmCardPayment(payments) {
      let response = await axios.post(`/api/card/payment/confirm`, payments)
    },

    async addPatientProgressNote(order) {
      let response = await axios.post(`/api/orders/update`, order)
    }
  }
})
