import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientCardPaymentStore = defineStore('patientCardPayment', {
    state: () => ({
        patientPayment: {},
        patientPayments: []
    }),
    getters: {
        getAllPatientsTheyPayForCard(state) {
            return this.patients
        },

    },
    actions: {
        addNewPatientTheyPayForCard(payload) {
            axios.post('/api/patients/register', payload)
        },
        async fetchPatients() {
            let response = await axios.get('/api/patients/all')
            console.log("Fetch All patints", response)
            this.patients = response.data.patients

        }
    }
})