import { defineAsyncComponent } from 'vue'

import Slide from './Slide.vue'
const Slider = defineAsyncComponent(() => import('./Slider.vue'))

export { Slide, Slider }
