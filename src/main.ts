import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/scss/app.scss'
import './plugins/vue.toastify'
import links from './plugins/links'
Vue.config.productionTip = false
Vue.use(links)
import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

import VueToastify from "vue-toastify";
import '@/assets/scss/toast.scss';

Vue.use(VueToastify, {
  theme: 'light',
  hideProgressbar: true,
  position: 'top-center'
});

declare module 'vue/types/vue' {
  interface Vue {
    $vToastify: VueToastify;
  }
}

new Vue({
  router,
  store,
  vuetify,
  pinia,
  render: function (h) { return h(App) }
}).$mount('#app')
