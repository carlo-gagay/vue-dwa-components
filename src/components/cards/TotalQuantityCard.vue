<script setup>
import { computed } from 'vue'

const props = defineProps({
  header: String,
  value: [Number, String],
  width: [Number, String]
})

const cardWidth = computed(() => {
  return props.width ? props.width.toString().concat('px') : 'auto'
})
</script>

<template>
  <div class="total-quantity-card" :style="{ 'min-width': cardWidth }">
    <div class="contents">
      <div class="text-caption">{{ header }}</div>
      <div class="text-heading-2">{{ value }}</div>
    </div>
    <button class="cta">
      <i class="icon icon-arrow-forward icon--s24"></i>
    </button>
  </div>
</template>
