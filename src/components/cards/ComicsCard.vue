<script setup>
defineProps({
  alt: String,
  image: String,
  subtitle: String,
  title: String
})

const emits = defineEmits(['onClick'])
</script>

<template>
  <div class="comics-card">
    <div class="comics-card-image" @click="emits('onClick')">
      <figure v-lazyload class="full-image">
        <img src="/images/placeholder.png" :data-url="image" :alt="alt" />
      </figure>
    </div>
    <div class="comics-card-info">
      <div class="text-sub-heading-1">{{ title }}</div>
      <div class="text-small-text text-[#BDB9B4]">{{ subtitle }}</div>
    </div>
  </div>
</template>
