import Vue from 'vue'
import VueRouter from 'vue-router'
import middlewarePipeline from './middleware-pipeline'
import { middleware } from './middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:locale',
    component: {
      template: "<router-view></router-view>"
    },
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale;
      console.log(locale);
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
          },
          {
            path: 'service',
            name: 'service-details',
            component: () => import('../views/ServiceDetails.vue'),
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
