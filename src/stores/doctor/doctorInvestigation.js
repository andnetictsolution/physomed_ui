import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const doctorInvestigation = defineStore('doctorInvestigation', {
    state: () => ({
        doctorInvestigation: {},
        doctorInvestigations: []
    }),
    getters: {
        getDoctorInvestigation(state) {
            return this.doctorInvestigations
        }
    },
    actions: {
        addDoctorInvestigation(payload) {
            axios.post('/api/medicalHistory/save', payload)
        },
        async fetchDoctorInvestigation() {
            let response = await axios.get('/')
            this.doctorPatient = response.data.doctorInvestigations
        }
    }
})