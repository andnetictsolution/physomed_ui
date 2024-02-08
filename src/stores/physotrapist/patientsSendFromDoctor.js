import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientStoreInPhysotropist = defineStore('physotrapistpatient', {
    state: () => ({
        physotrapistPatient: {},
        physotrapistPatients: []
    }),
    getters: {
        getAllPatientsFromPhysotrapist(state) {
            return this.physotrapistPatients
        }
    },
    actions: {
        addPatientToPhysotrapist(payload) {
            axios.post('/', payload)
        },
        async fetchPatientsFromPhysotrapist() {
            let response = await axios.get('/')
            this.doctorPatient = response.data.physotrapistPatients

        }
    }
})