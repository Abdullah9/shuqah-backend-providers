import { TYPE_DECORATIONS, TYPE_ELECTRONIC_DEVICES, TYPE_HOME_FURNISHINGS, TYPE_MAINTENANCE, TYPE_MOVE_FURNITURE } from "./constants"

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
        role: [TYPE_MOVE_FURNITURE, TYPE_MAINTENANCE]
      },
     
      {
        name: 'Products',
        route: 'products',
        icon: 'mdi-server',
        children: [],
        role: [TYPE_ELECTRONIC_DEVICES, TYPE_HOME_FURNISHINGS, TYPE_DECORATIONS]
      },
      {
        name: 'Orders',
        route: 'orders',
        icon: 'mdi-cart',
        children: [],
        role: [ TYPE_ELECTRONIC_DEVICES, TYPE_HOME_FURNISHINGS, TYPE_DECORATIONS]
      },
    ]
  }
}