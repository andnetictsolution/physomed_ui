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
            await axios.post(`/api/medicalHistory/save/${payload.patient_id}`, { medical_history_data: payload })
        },
        async fetchPatientsMedicalHistory(id) {
            console.log(" IDDD", id)

            let response = await axios.get(`/api/patients/single/${id}`)
            console.log("Fetch All Medical History", response)
            this.medicalHistory = response
        },
        async saveVitalSign(payload) {
            console.log(payload.vitalSigns)
            const response = await axios.post(`api/medicalhistory/save/${payload.id}`, {
                medical_history_data: {
                    vitalSigns: [payload.vitalSigns]
                }
            })
            console.log(response)
        }
    }
})
