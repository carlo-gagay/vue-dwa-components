import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import FloatingVue from 'floating-vue'
import lazyload from './directives/lazyload'

createApp(App).use(FloatingVue).directive('lazyload', lazyload).mount('#app')
