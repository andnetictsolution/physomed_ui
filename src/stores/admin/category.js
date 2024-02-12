import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const categoryStore = defineStore('categoryStore', {
  state: () => ({
    category: {},
    Categories: []
  }),
  getters: {
    getAllCategories: (state) => {
      return state.Categories
    },
    getSingleCategorie: (state) => {
      return state.category
    }
  },
  actions: {
    async addNewCategorie(payload) {
      const response = await axios.post('/api/categories/add', payload)
      console.log(response)
    },

    async fetchCategories() {
      console.log('inside fetchServices')
      let response = await axios.get('/api/categories/all')
      console.log(response)
      this.Categories = response.data.categories
    }
  }
})
