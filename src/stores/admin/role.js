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
            await axios.post('/api/roles/add', payload).then((response)=>{
                this.roles.push(response.data.role)
            })
        },
        async fetchRoles() {
            let response = await axios.get('/api/roles/all');
            this.roles = response.data.roles
        }
    }
})
