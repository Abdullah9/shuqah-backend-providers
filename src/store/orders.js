import { defineStore } from 'pinia'
import { axiosInstance } from '@/plugins/axios'
import router from "@/router"

export const useOrdersStore = defineStore('orders', {
  state: () => {
    return {
      orders: null,
      per_page: 10
    }
  },

  actions: {
    async getOrders() {
      await axiosInstance.get(`/provider/provider-orders?
      per_page=${this.per_page}
      `)
      .then(res => {
        this.orders = res.data.data
      })
    },
    async showOrder(payload) {
      return await new Promise((resolve, reject) => {
        axiosInstance.get(`/provider/provider-orders/${payload}`)
        .then(res => {
          resolve(res.data.data)
        })
      })
    },
    async changeOrderStatus({ id, status }) {
      return await new Promise((resolve, reject) => {
        axiosInstance.post(`/provider/order/change-status`, {id , status })
        .then(res => {
          resolve(res.data.message);
        })
        .catch(err => {
          reject(err.response.data.errors)
        })
     }) 
    },
  }
})