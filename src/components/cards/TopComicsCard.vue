<script setup>
import AnalyticsCardBase from './base/AnalyticsCardBase.vue'
import NoContentBase from './base/NoContentBase.vue'

defineProps({
  data: {
    type: Array,
    default: () => []
  },
  header: String,
  width: [Number, String]
})
</script>

<template>
  <AnalyticsCardBase wrapperClasses="top-comics" :header="header" :width="width">
    <template #slot-expand>
      <button class="cta">
        <i class="icon icon-arrow-forward icon--s24"></i>
      </button>
    </template>
    <div v-if="data.length > 0" class="contents">
      <div v-for="(item, index) in data" class="comics-card-simple">
        <div class="icon"></div>
        <div class="card-contents">
          <div class="text-small-text">{{ item.type }}</div>
          <div class="text-body-1">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <NoContentBase
      v-else
      title="No Comics Yet"
      subtitle="Create a new title and publish it to see the top titles, books, chapters, and issues."
    />
  </AnalyticsCardBase>
</template>
