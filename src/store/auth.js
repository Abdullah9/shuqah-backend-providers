import { defineStore } from 'pinia'
import { axiosInstance } from '@/plugins/axios'
import router from "@/router"

export const useAuthStore = defineStore('authentication', {
  state: () => {
    return {
      user: []
    }
  },

  actions: {
    async login(payload) {
      return await new Promise((resolve, reject) => {
         axiosInstance.post('/login', payload)
        .then(res => {
          this.user = res.data.data
          localStorage.setItem('access_token', res.data.data.access_token)
          resolve(res.data.data);
        })
        .catch(err => {
          this.errors = err.response.data.errors
          reject(err.response.data.errors)
        })
      }) 
    },

    async logout() {
      await axiosInstance.get('/logout')
      .then(res => {
        localStorage.removeItem('access_token')
        router.push({name: 'login'})
      })
    },

    async auth() {
 
      await axiosInstance.get('/user')
      .then(res => {
        this.user = res.data
        if(!this.user.role) return router.push({ name: "Mobile Complete Information" })
      })
      .catch(err => {
        // this.signOut()
      })
    },
  }
})