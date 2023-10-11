import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./demo/ReadersLayoutDemo.vue') },
  { path: '/comics', component: () => import('./demo/ComicDescriptionLayoutDemo.vue') },
  { path: '/chapters', component: () => import('./demo/ChapterCardsLayoutDemo.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
