import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientTreatmentStore = defineStore('physotrapistpatient', {
    state: () => ({
        patienTreatment: {},
        patienTreatments: []
    }),
    getters: {
        getAllTreatment(state) {
            return this.patienTreatments
        }
    },
    actions: {
        addTreatment(payload) {
            axios.post('/', payload)
        },
        async fetchTreatment() {
            let response = await axios.get('/')
            this.doctorPatient = response.data.physotrapistPatients

        }
    }
})