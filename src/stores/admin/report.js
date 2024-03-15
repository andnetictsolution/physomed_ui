import { defineStore } from 'pinia'
import axios from '../../plugins/axios'
export const reportStore = defineStore('reportStore', {
  state: () => ({
    revenue: {},
    compare_revenue:[],
    physio_report:[]
  }),
  getters: {
    getRevenue: (state) => {
      return state.revenue
    },
    getRevenueCompare:(state)=>{
      return state.compare_revenue
    },
    getPhysioReport:(state)=>{
      return state.physio_report
    }
  },
  actions: {
    async fetchRevenue(payload) {
      await axios.get('/api/reports/revenue', payload).then((response) => {
        console.log(response)
        this.revenue = response.data.revenue_data
      })
    },
    async fetchCompareRevenue(payload) {
      await axios.post('/api/reports/revenue/compare', payload).then((response) => {
        console.log(response.data,'response')
        this.compare_revenue = response.data
      })
    },
    async fetchPhysioReport(payload) {
      await axios.post('/api/reports/orders/serviceGivenBy/'+payload.id, payload).then((response) => {
        console.log(response.data,'physio report')
        this.physio_report = response.data.filteredOrders
      })
    },

    async fetchCards() {
      await axios.get('/api/card/payment/get').then((response) => {
        console.log(response.data, 'response')
        this.cards = response.data.card_payment_config
      })
    },
    async configureCard(payload) {
      await axios.post('/api/card/payment/set', payload).then((response) => {
        console.log(response.data)
      })
    },

    async fetchCategories() {
      let response = await axios.get('/api/categories/all')
      this.Categories = response.data.categories
    }
  }
})
