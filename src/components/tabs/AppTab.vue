<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: String,
  gap: [Number, String]
})

const tabGap = computed(() => {
  return props.gap ? { 'column-gap': props.gap.toString().concat('px') } : 'auto'
})
</script>

<template>
  <div id="app-tab" :class="size" :style="tabGap">
    <slot />
  </div>
</template>
