<script setup>
defineProps({
  alt: String,
  image: String,
  subtitle: String,
  title: String
})
</script>

<template>
  <div class="comics-card">
    <div class="comics-card-image">
      <figure v-lazyload class="full-image">
        <img :src="image" :alt="alt" />
      </figure>
    </div>
    <div class="comics-card-info">
      <div class="sub-heading-1">{{ title }}</div>
      <div class="small-text text-[#BDB9B4]">{{ subtitle }}</div>
    </div>
  </div>
</template>
