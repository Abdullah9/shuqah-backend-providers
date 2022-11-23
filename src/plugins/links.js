export default {
  install(Vue) {
    Vue.prototype.$links = [
      {
        name: 'Dashboard',
        route: 'Banker Dashboard',
        icon: 'mdi-bell',
        children: [],
        role: ['PROVIDER', '']
      },
      {
        name: 'Services',
        route: 'services',
        icon: 'mdi-account-hard-hat',
        children: [],
        role: ['PROVIDER', 'Move Furniture', 'Maintenance']
      },
      {
        name: 'Products',
        route: 'products',
        icon: 'mdi-cart',
        children: [],
        role: ['Home Furnishings']
      },
    ]
  }
}