import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const patientStoreInDoctor = defineStore('doctorpatient', {
    state: () => ({
        doctorPatient: {},
        doctorPatients: []
    }),
    getters: {
        getAllPatientsFromDoctor(state) {
            return this.doctorPatients
        }
    },
    actions: {
        addPatientToDoctor(payload) {
            axios.post('/', payload)
        },
        async fetchPatientsFromDoctor() {
            let response = await axios.get('/')
            this.doctorPatient = response.data.doctorPatients
        }
    }
})