<script setup>
import { computed } from 'vue'

const props = defineProps({
  width: [Number, String]
})

const cardWidth = computed(() => {
  return props.width ? props.width.toString().concat('px') : 'auto'
})
</script>

<template>
  <div class="analytics-card-simple grow" :style="{ 'min-width': cardWidth }">
    <div class="card-header-wrap">
      <div class="card-header">TOP COMICS</div>
      <button class="cta">
        <i class="icon icon-arrow-forward icon--s24"></i>
      </button>
    </div>
  </div>
</template>
