import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'
// import en from 'vuetify/lib/locale/en'
Vue.use(Vuetify);
import en from './en.lang'
import ar from './ar.lang'

export default new Vuetify({
  lang: {
    locales: { ar, en },
    current: 'ar'
  },
  rtl: false,
  theme: {
    dark: false,
    themes: {
      light: {
        'dark': '#2E3034',
        'dark-1': '#474747',
        'light': '#F0F2F5',
        'secondary': '#D9D9D9',
        'secondary-1': '#7B809A',
        'secondary-2': '#767676',
        'secondary-3': '#2c3e50',
      }
    }
  }
});
