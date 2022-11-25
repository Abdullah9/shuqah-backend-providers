import { defineStore } from 'pinia'
import { axiosInstance } from '@/plugins/axios'
import router from "@/router"

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      products: [],
      type: '',
      sub_type: '',
      per_page: 10
    }
  },

  actions: {
    async getProducts() {
      await axiosInstance.get(`/provider/products?
      per_page=${this.per_page}
      &type=${this.type}
      `)
      .then(res => {
        this.products = res.data.data
      })
    },
    async showProduct(payload) {
      return await new Promise((resolve, reject) => {
        axiosInstance.get(`/provider/products/${payload}`)
        .then(res => {
          resolve(res.data.data)
        })
      })
    },
    async addProduct(payload) {
      return await new Promise((resolve, reject) => {
        axiosInstance.post(`/provider/products`, payload)
        .then(res => {
          resolve(res.data.data);
        })
        .catch(err => {
          reject(err.response.data.errors)
        })
     }) 
    },
    async updateImage(payload) {
      return await new Promise((resolve, reject) => {
        axiosInstance.post(`/provider/product/update-image`, payload)
        .then(res => {
          resolve(res.data.message);
        })
        .catch(err => {
          reject(err.response.data.errors)
        })
     }) 
    },
    async updateProduct(payload) {
      return await new Promise((resolve, reject) => {
        axiosInstance.put(`/provider/products/${payload.id}`, payload)
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