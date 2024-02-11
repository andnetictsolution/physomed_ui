import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const orderStore = defineStore('order', {
    state: () => ({
        order: {},
        orders: []
    }),
    getters: {
        getAllPatients(state) {
            return this.patients
        },
    },
    actions: {
        async createOrder(payload) {
            const response = await axios.post('/api/orders/add', payload);
            console.log(response, "response")
        },
        async fetchPatients() {
            let response = await axios.get('/api/patients/all')
            console.log("Fetch All patints", response)
            this.patients = response.data.patients

        }
    }
})