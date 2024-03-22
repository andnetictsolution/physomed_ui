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
        },
        async fetchPatients() {
            let response = await axios.get('/api/patients/all')
            this.patients = response.data.patients
        },
        async fetchOrders() {
            let response = await axios.get('/api/orders/all')
            this.orders = response.data.orders
        },
        async fetchFilteredOrders(payload) {
            let response = await axios.post('/api/orders/filter', payload)
            this.orders = response.data.orders
        },
        async fetchSingleOrder(id) {
            let response = await axios.get(`/api/orders/single/${id}`)
            this.order = response.data.order
        },
        async confirmPayment(payments) {
            let response = await axios.post(`/api/payments/confirm`, payments)
        }
    }
})
