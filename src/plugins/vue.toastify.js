import Vue from "vue";
import VueToastify from "vue-toastify";
import '@/assets/scss/toast.scss';

Vue.use(VueToastify, {
  theme: 'light',
  hideProgressbar: true,
  position: 'top-center'
});