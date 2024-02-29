import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const orderStore = defineStore('orderDoctor', {
    state: () => ({
        order: {},
        patients: [],
        orders: []
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
        }
    },
    actions: {
        async createOrder(payload) {
            const response = await axios.post('/api/orders/add', payload)
            console.log(response, 'response')
        },
        async fetchPatients() {
            let response = await axios.get('/api/patients/all')
            console.log('Fetch All patints', response)
            this.patients = response.data.patients
        },
        async fetchOrders() {
            let response = await axios.get('/api/orders/all')
            console.log('Fetch All orders', response)
            this.orders = response.data.orders
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
            let response = await axios.post(`/api/payments/confirm`, payments)
            console.log('Confirm payment', response)
        }
    }
})
