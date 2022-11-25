import { defineStore } from 'pinia'
import { axiosInstance } from '@/plugins/axios'
import { TYPE_MOVE_FURNITURE, TYPE_MAINTENANCE } from '@/plugins/constants'
import router from "@/router"

export const useAuthStore = defineStore('authentication', {
  state() {
    return {
      user: null
    }
  },

  actions: {
    async login(payload) {
      return await new Promise((resolve, reject) => {
         axiosInstance.post('/login', payload)
        .then(res => {
          localStorage.setItem('access_token', res.data.data.access_token)
          let name = 'products';
          this.auth().then(res=> {
            this.user = res.data
            if([TYPE_MOVE_FURNITURE,TYPE_MAINTENANCE].includes(this.user.category.category.category)) {
              name = 'services'
            }
          })
          
          router.push({ name: name, params: { locale: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en' }})
          resolve(res.data.data);
        })
        .catch(err => {
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
      })
      .catch(err => {
      })
    },
  }
})