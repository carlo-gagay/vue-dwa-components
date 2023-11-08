import './assets/main.scss'
import 'floating-vue/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import FloatingVue from 'floating-vue'
import lazyload from './directives/lazyload'
import router from './router'

createApp(App).use(FloatingVue).directive('lazyload', lazyload).use(router).mount('#app')
