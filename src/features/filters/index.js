import { defineAsyncComponent } from 'vue'

const AudioAvailabilityFilters = defineAsyncComponent(() =>
  import('./AudioAvailabilityFilters.vue')
)
const CompletionFilters = defineAsyncComponent(() => import('./CompletionFilters.vue'))
const ContentRatingFilters = defineAsyncComponent(() => import('./ContentRatingFilters.vue'))
const GenreFilters = defineAsyncComponent(() => import('./GenreFilters.vue'))

export { AudioAvailabilityFilters, CompletionFilters, ContentRatingFilters, GenreFilters }
