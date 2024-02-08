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
        async addpatientmedicalHistory(payload) {
            console.log("Patient Id", payload)
            await axios.post(`/api/medicalHistory/save/${payload.patient_id}`, { medical_history_data: payload })
        },
        deletuser(payload) {
            axios.delete('/api/users/remove/', id)
        },
        async fetchMedicalHistory() {
            let response = await axios.get('/');
            console.log(response);
            this.users = response.data.medicalHistories
        }
    }
})
