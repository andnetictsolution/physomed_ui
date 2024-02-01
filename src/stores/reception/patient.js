import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientStore = defineStore('patient', {
    state: () => ({
        patient: {},
        patients: []
    }),
    getters: {
        async getAllPatients(state) {
            const response = await axios.get('/api/patients/all')
            state.patients = response
            console.log("Patients", state.patients)
            return state.patients
        }
    },
    actions: {
        addNewPatient(payload) {
            axios.post('/api/patients/register', payload)
        }
    }
})