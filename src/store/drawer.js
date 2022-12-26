import { defineStore } from 'pinia'
import { axiosInstance } from '@/plugins/axios'

export const useDrawerStore = defineStore('drawer', {
  state: () => {
    return {
      drawer: null,
    }
  },

  actions: {

  }
})