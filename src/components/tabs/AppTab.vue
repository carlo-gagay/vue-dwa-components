<script setup>
const props = defineProps({
  size: String,
  gap: {
    type: String,
    default: 'md',
    validator(value) {
      return ['xl', 'lg', 'md', 'sm'].includes(value)
    }
  },
  type: {
    type: Number,
    default: 1,
    validator(value) {
      return [1, 2, 3, 4].includes(value)
    }
  }
})
</script>

<template>
  <div id="app-tab" :class="[`gap-${gap}`, size, `type-${type}`]">
    <slot />
  </div>
</template>
