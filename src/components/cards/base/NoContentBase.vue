<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>

<template>
  <div class="no-content-base">
    <i class="icon icon-menu-book icon--s50"></i>
    <div class="text-body-1">{{ title }}</div>
    <div class="text-small-text">{{ subtitle }}</div>
  </div>
</template>
