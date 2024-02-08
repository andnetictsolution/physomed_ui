import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const serviceStore = defineStore('service', {
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
        addNewservice(payload) {
            axios.post('/api/services/add', payload)
        },
        deletuser(payload) {
            axios.delete('/api/services/remove/', id)
        },
        async fetchServices() {
            let response = await axios.get('/api/services/all');
            console.log(response);
            this.services = response.data.services
        }
    }
})
