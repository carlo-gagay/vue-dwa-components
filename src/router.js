import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./demo/ReadersLayoutDemo.vue') },
  { path: '/comics', component: () => import('./demo/ReadersDescriptionLayoutDemo.vue') },
  { path: '/chapters', component: () => import('./demo/ReadersFullContentLayoutDemo.vue') },
  {
    path: '/comic-page',
    component: () => import('./demo/ReadersReadingModeLayoutDemo/ReadersReadingModeLayoutDemo.vue')
  },
  { path: '/admin', component: () => import('./demo/AuthenticatedLayoutDemo.vue') },
  { path: '/search', component: () => import('./demo/ComicsSearchResultDemo.vue') },
  { path: '/author', component: () => import('./demo/AuthorDetialsDemo.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
