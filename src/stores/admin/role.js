import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const roleStore = defineStore('roleStore', {
    state: () => ({
        role: {},
        roles: []
    }),
    getters: {
        getAllRoles: (state) => {
            return state.roles
        },
        getSingleRoles: (state) => {
            return state.roles
        },

    },
    actions: {
        async addNewRole(payload) {
            await axios.post('/api/roles/add', payload)
        },
        async fetchRoles() {
            let response = await axios.get('/api/roles/all');
            console.log('Responece in Roles', response);
            this.roles = response.data.roles
        }
    }
})
