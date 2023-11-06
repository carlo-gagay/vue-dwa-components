<script setup>
defineProps({
  alt: String,
  image: String
})
</script>

<template>
  <div>
    <img style="height: 100%" :src="image" :alt="alt" />
  </div>
</template>
