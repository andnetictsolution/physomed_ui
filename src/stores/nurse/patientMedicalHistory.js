import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientMedicalHistoryStore = defineStore('patientMedicalHistory', {
  state: () => ({
    medicalHistory: {},
    medicalHistories: []
  }),
  getters: {},
  actions: {
    async addpatientmedicalHistory(payload) {
      console.log('Patient Id', payload)
      await axios.post(`/api/medicalHistory/save/${payload.patient_id}`, {
        medical_history_data: payload
      })
    },
    async saveVitalSign(payload) {
      console.log(payload.vitalSigns)
      const response = await axios.post(`api/medicalhistory/save/${payload.id}`, {
        medical_history_data: {
          vitalSigns: [payload.vitalSigns]
        }
      })
      console.log(response)
    },
    async saveMedicalAssement(payload) {
      console.log(payload.vitalSigns)
      const response = await axios.post(`api/medicalhistory/save/${payload.id}`, {
        medical_history_data: payload.medical_history
      })
      console.log(response)
    },

    async fetchMedicalHistory() {
      let response = await axios.get('/')
      console.log(response)
      this.users = response.data.medicalHistories
    }
  }
})
