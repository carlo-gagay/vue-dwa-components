<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: String,
  gap: [Number, String],
  type: {
    type: Number,
    default: 1,
    validator(value) {
      return [1, 2, 3, 4].includes(value)
    }
  }
})

const tabGap = computed(() => {
  return props.gap ? { 'column-gap': props.gap.toString().concat('px') } : 'auto'
})
</script>

<template>
  <div id="app-tab" :class="[size, `type-${type}`]" :style="tabGap">
    <slot />
  </div>
</template>
