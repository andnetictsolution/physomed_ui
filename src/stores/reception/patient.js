import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientStore = defineStore('patient', {
    state: () => ({
        patient: {},
        patients: []
    }),
    getters: {
        getAllPatients(state) {
            console.log("All patyients", state.patients)
            return this.patients
        }
    },
    actions: {
        addNewPatient(payload) {
            axios.post('/api/patients/register', payload)
        },
        async fetchPatients() {
            let response = await axios.get('/api/patients/all')
            console.log("Fetch All patints", response)
            this.patients = response.data.patients

        }
    }
})