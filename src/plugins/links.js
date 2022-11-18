export default {
  install(Vue) {
    Vue.prototype.$links = [
      {
        name: 'Dashboard',
        route: 'Banker Dashboard',
        icon: 'mdi-bell',
        children: [],
        role: ['SUPER ADMIN', 'ADMIN', 'BANKER', 'PROVIDER']
      },
      {
        name: 'Services',
        route: 'services',
        icon: 'mdi-account-hard-hat',
        children: [],
        role: ['SUPER ADMIN', 'ADMIN', 'BANKER', 'PROVIDER']
      },
    ]
  }
}