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
    getSinglePatient(state) {
      return state.patient
    }
  },
  actions: {
    async addNewPatient(payload) {
      await axios
        .post('/api/patients/register', payload)
        .then((res) => {
          // console.log(res)
        })
        .catch((err) => {
        })
    },
    async updatePatient(payload) {
      await axios
        .put('/api/patients/update/' + payload.id, payload.patient)
        .then((response) => {
          // console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async fetchPatients() {
      let response = await axios.get('/api/patients/all')
      this.patients = response.data.patients
      // console.log(this.patients)
    },
    
    async fetchSinglePatient(id) {
      let response = await axios.get('api/patients/' + id)
      this.patient = response.data.patient
    }
  }
})
