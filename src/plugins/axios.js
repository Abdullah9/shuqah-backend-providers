import axios from 'axios'

let base = process.env.VUE_APP_BASE_URL

const axiosInstance = axios.create({ baseURL: base })

axiosInstance.interceptors.request.use(request => {
  const token = localStorage.getItem('access_token')
  if (token) request.headers.common['Authorization'] = `Bearer ${token}`
  return request
})

export default {
  install(Vue) { Vue.prototype.$axiosInstance = axiosInstance }
}

export { axiosInstance }