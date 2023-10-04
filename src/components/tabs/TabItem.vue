<template>
  <div class="tab-item" :class="{ active: active }">
    <a href="#"> {{ title }} </a>
    <span class="badge"> {{ count }} </span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  count: Number,
  active: Boolean
})
</script>
