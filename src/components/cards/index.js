import { defineAsyncComponent } from 'vue'

const TitleCardBanner = defineAsyncComponent(() => import('./TitleBanner.vue'))
const TitleCardDetailed = defineAsyncComponent(() => import('./TitleCardDetailed.vue'))
const TitleCardAuth = defineAsyncComponent(() => import('./TitleCardAuth.vue'))

export { TitleCardBanner, TitleCardDetailed, TitleCardAuth }
