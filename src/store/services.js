import { defineStore } from 'pinia'
import { axiosInstance } from '@/plugins/axios'
import router from "@/router"

export const useServicesStore = defineStore('services', {
  state: () => {
    return {
      services: [],
      per_page: 10
    }
  },

  actions: {
    async getServices() {
      await axiosInstance.get(`/provider/services?per_page=${this.per_page}`)
      .then(res => {
        this.services = res.data.data
      })
    },
    async showService(payload) {
      return await new Promise((resolve, reject) => {
        axiosInstance.get(`/provider/services/${payload}`)
        .then(res => {
          resolve(res.data.data);
        })
        .catch(err => {
          reject(err.response.data.errors)
        })
     }) 
    },
    async changeStatusService({ id, status }) {
      return await new Promise((resolve, reject) => {
        axiosInstance.post(`/provider/service-change-status`, {id, status})
        .then(res => {
          resolve(res.data.message);
        })
        .catch(err => {
          reject(err.response.data.errors)
        })
     }) 
    },
    async priceOfferService({ id, price_offer }) {
      return await new Promise((resolve, reject) => {
        axiosInstance.post(`/provider/service-send-price-offer`, {id, price_offer})
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