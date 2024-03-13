import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientStore = defineStore('patient', {
  state: () => ({
    patient: {},
    patients: []
  }),
  getters: {
    getAllPatients(state) {
      return state.patients
    },
    getPatient(state) {
      return state.patient
    }
  },
  actions: {
    async addNewPatient(payload) {
      await axios
        .post('/api/patients/register', payload)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async fetchPatients() {
      let response = await axios.get('/api/patients/all')
      this.patients = response.data.patients
    },
    async fetchSinglePatient(id) {
      let response = await axios.get('api/patients/' + id)
      this.patient = response.data.patient
    }
  }
})
