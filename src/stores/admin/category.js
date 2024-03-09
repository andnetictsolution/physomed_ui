import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const categoryStore = defineStore('categoryStore', {
  state: () => ({
    category: {},
    Categories: [],
    cards:[]
  }),
  getters: {
    getAllCategories: (state) => {
      return state.Categories
    },
    getSingleCategorie: (state) => {
      return state.category
    },
    getCard:(state)=>{
      return state.cards
    }
  },
  actions: {
    async addNewCategorie(payload) {
      await axios.post('/api/categories/add', payload).then((response) => {
        this.Categories.push(response.data.category);
      })
    },

    async fetchCards(){
      await axios.get('/api/card/payment/get').then((response) => {
        console.log(response.data,"response")
        this.cards = response.data.card_payment_config
      })
    },
    async configureCard(payload){
await axios.post('/api/card/payment/set',payload).then((response) => {
  console.log(response.data)
})
    },

    async fetchCategories() {
      let response = await axios.get('/api/categories/all')
      this.Categories = response.data.categories
    }
  }
})
