import { defineAsyncComponent } from 'vue'
const SelectableFilter = defineAsyncComponent(() => import('./SelectableFilter.vue'))

export { SelectableFilter }
