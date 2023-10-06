import { defineAsyncComponent } from 'vue'

const FiltersSection = defineAsyncComponent(() => import('./Filters.vue'))

export { FiltersSection }
