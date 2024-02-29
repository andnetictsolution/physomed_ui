import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const cardStore = defineStore('card', {
  state: () => ({
    card: null
  }),
  getters: {
    getCardPrice: (state) => {
      return state.card
    }
  },
  actions: {
    addCard(payload) {
      axios.post('/api/users/register', payload)
    },
    async confirmCardPayment(payload) {
      const response = await axios.post('/api/card/payment/confirm', payload)
      console.log(response, 'card confirmation')
    },

    async fetchCardPrice() {
      let response = await axios.get('/api/card/payment/get')
      console.log(response, 'response')
      this.card = response.data.card_payment_config
    }
  }
})
