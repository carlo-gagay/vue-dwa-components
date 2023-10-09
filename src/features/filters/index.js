import { defineAsyncComponent } from 'vue'

const AudioAvailabilityFilter = defineAsyncComponent(() =>
  import('./AudioAvailabilityFilter.vue')
)
const CompletionFilter = defineAsyncComponent(() => import('./CompletionFilter.vue'))
const ContentRatingFilter = defineAsyncComponent(() => import('./ContentRatingFilter.vue'))
const GenreFilter = defineAsyncComponent(() => import('./GenreFilter.vue'))

const ComicFilters = defineAsyncComponent(() => import('./ComicFilters.vue'))

export {
  AudioAvailabilityFilter,
  CompletionFilter,
  ComicFilters,
  ContentRatingFilter,
  GenreFilter
}
