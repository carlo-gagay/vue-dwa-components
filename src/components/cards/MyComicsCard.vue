<script setup>
import AnalyticsCardBase from './base/AnalyticsCardBase.vue'
import NoContentBase from './base/NoContentBase.vue'

defineProps({
  header: String
})
</script>

<template>
  <AnalyticsCardBase wrapperClasses="my-comics" :header="header">
    <template #slot-expand>
      <button class="cta">
        <i class="icon icon-arrow-forward icon--s24"></i>
      </button>
    </template>
    <NoContentBase title="No Published Comics Yet" />
  </AnalyticsCardBase>
</template>
