import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientMedicalHistoryStore = defineStore('patientMedicalHistory', {
    state: () => ({
        medicalHistory: {},
        medicalHistories: []
    }),
    getters: {

    },
    actions: {
        addpatientmedicalHistory(payload) {
            console.log("Patient Id", payload.patient_id)
            axios.post(`/api/medicalHistory/save/${payload.patient_id}`)
        },
        deletuser(payload) {
            axios.delete('/api/users/remove/', id)
        },
        async fetchUsers() {
            let response = await axios.get('/api/users');
            console.log(response);
            this.users = response.data.users
        }
    }
})
