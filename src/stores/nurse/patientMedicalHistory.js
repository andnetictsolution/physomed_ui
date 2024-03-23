import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientMedicalHistoryStore = defineStore('patientMedicalHistory', {
    state: () => ({
        medicalHistory: {},
        medicalHistories: []
    }),
    getters: {
        getVitalSign(state) {
            return state.medicalHistory
        }

    },
    actions: {
        async addpatientmedicalHistory(payload) {
            console.log(payload);
            await axios.post(`/api/medicalHistory/save/${payload.patient_id}`, { medical_history_data: payload }).then((response) => {
                this.medicalHistory = response.data.patient
            })
        },
        
        async fetchPatientsMedicalHistory(id) {
            let response = await axios.get(`/api/patients/${id}`)
            this.medicalHistory = response.data.patient
        },
        async saveVitalSign(payload) {
            await axios.post(`api/medicalhistory/save/${payload.id}`, {
                medical_history_data: {
                    vitalSigns: [payload.vitalSigns]
                }
            }).then((response) => {
this.medicalHistory = response.data.patient
            })
        }
    }
})
