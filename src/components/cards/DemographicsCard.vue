<script setup>
import AnalyticsCardBase from './base/AnalyticsCardBase.vue'

defineProps({
  header: String
})
</script>

<template>
  <AnalyticsCardBase wrapperClasses="demographic" :header="header">
    <template #slot-expand>
      <button class="cta">
        <i class="icon icon-arrow-forward icon--s24"></i>
      </button>
    </template>
  </AnalyticsCardBase>
</template>
