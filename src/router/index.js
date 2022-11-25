import Vue from 'vue'
import VueRouter from 'vue-router'
import middlewarePipeline from './middleware-pipeline'
import { middleware } from './middleware'
import { useAuthStore } from '@/store/auth'
import { createPinia, PiniaVuePlugin } from 'pinia'
const pinia = createPinia()
Vue.use(VueRouter)

const routes = [
  {
    path: '/:locale',
    component: {
      template: "<router-view></router-view>"
    },
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale;
      const locales = ['en', 'ar']
      if(!locales.includes(locale)) return next('en/login')
      return next()
    },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '',
        component: () => import('../layouts/Main.vue'),
        children: [
          {
            path: 'services',
            name: 'services',
            component: () => import('../views/Services.vue'),
            meta:{ middleware: [middleware] },
            // beforeEnter: (to, from, next) => {
            //   return next();
            //   const store = useAuthStore(pinia)
            //   const roles = ['Move Furniture', 'Maintenance'];
            //   store.auth().then(() => {
            //     if(!roles.includes(store.user.category.category.category)) {
            //       const locale = to.params.locale;
            //       const locales = ['en', 'ar']
            //       if(!locales.includes(locale)) return next('/en/products')
            //       return next('products')
            //     }
            //     return next()
            //   })
            // },
          },
          {
            path: 'service',
            name: 'service-details',
            component: () => import('../views/ServiceDetails.vue'),
            meta:{ middleware: [middleware] },
          },
          {
            path: 'products',
            name: 'products',
            component: () => import('../views/Products.vue'),
            meta:{ middleware: [middleware] },
          },
          {
            path: 'product',
            name: 'product-details',
            component: () => import('../views/ProductDetails.vue'),
            meta:{ middleware: [middleware] },
          },
          {
            path: 'orders',
            name: 'orders',
            component: () => import('../views/Orders.vue'),
            meta:{ middleware: [middleware] },
          },
          {
            path: 'order',
            name: 'order-details',
            component: () => import('../views/OrderDetails.vue'),
            meta:{ middleware: [middleware] },
          },
        ]
      },
      {
        path: '*',
        redirect: {
          name: 'login',
          params: { locale: 'en' }
        }
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
    const ctx = { from, next, to };
    const nextMiddleware = middlewarePipeline(ctx, middleware, 1);

    return middleware[0]({ ...ctx, next: nextMiddleware });
  }
  return next();
});

export default router
