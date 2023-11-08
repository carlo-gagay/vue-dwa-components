import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./demo/ReadersLayoutDemo/Index.vue') },
  { path: '/comics', component: () => import('./demo/ReadersDescriptionLayoutDemo/Index.vue') },
  { path: '/chapters', component: () => import('./demo/ReadersFullContentLayoutDemo/Index.vue') },
  {
    path: '/comic-page',
    component: () => import('./demo/ReadersReadingModeLayoutDemo/Index.vue')
  },
  { path: '/titles', component: () => import('./demo/AuthenticatedLayoutDemo/Index.vue') },
  { path: '/search', component: () => import('./demo/ComicsSearchResultDemo/Index.vue') },
  { path: '/author', component: () => import('./demo/AuthorDetailsDemo/Index.vue') },
  { path: '/dashboard', component: () => import('./demo/DashboardLayoutDemo/Index.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
