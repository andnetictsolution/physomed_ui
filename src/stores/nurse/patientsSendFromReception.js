import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientStoreInNurse = defineStore('nurseePatient', {
    state: () => ({
        nursePatient: {},
        nursePatients: []
    }),
    getters: {
        getAllPatientsFromNurse(state) {
            return this.nursePatients
        }
    },
    actions: {
        addPatientToDoctor(payload) {
            axios.post('/', payload)
        },
        async fetchPatientsFromNurse() {
            let response = await axios.get('/api/orders/all')
            this.nursePatients = response.data.orders
        }
    }
})