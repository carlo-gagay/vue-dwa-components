<script setup>
defineProps({
  header: String,
  wrapperClasses: String
})
</script>

<template>
  <div class="analytics-card-simple" :class="wrapperClasses">
    <div class="card-header-wrap">
      <div class="card-header">{{ header }}</div>
      <slot name="slot-expand"></slot>
    </div>
    <slot></slot>
  </div>
</template>
