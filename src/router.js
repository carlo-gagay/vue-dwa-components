import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./demo/ReadersLayoutDemo.vue') },
  { path: '/comics', component: () => import('./demo/ReadersDescriptionLayoutDemo.vue') },
  { path: '/chapters', component: () => import('./demo/ReadersFullContentLayoutDemo.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
