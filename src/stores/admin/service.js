import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const serviceStore = defineStore('serviceStore', {
    state: () => ({
        service: {},
        services: []
    }),
    getters: {
        getAllServices: (state) => {
            return state.services
        },
        getSingleService: (state) => {
            return state.service
        },

    },
    actions: {
        async addNewservice(payload) {
            await axios.post('/api/services/add', payload)
        },
        async deletuser(payload) {
            await axios.delete('/api/services/remove/', id)
        },
        async fetchServices() {
            console.log("inside fetchServices")
            let response = await axios.get('/api/services/all');
            console.log(response);
            this.services = response.data.services
        }
    }
})
