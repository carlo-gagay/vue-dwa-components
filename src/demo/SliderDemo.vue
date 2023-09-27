<script setup>
import { Slide, Slider } from '@components/sliders'
</script>

<template>
  <Slider :loop="true" :drag="false">
    <Slide v-for="(item, index) in 5" :key="index" class="hero-banner-image">
      <img :src="`https://picsum.photos/90${index}`" alt="Picsum pics" />
    </Slide>
    <template #navigator="{ navigator }">
      <div class="navigator">
        <button class="prev" @click="navigator.prev">Prev</button>
        <button class="next" @click="navigator.next">Next</button>
      </div>
    </template>
  </Slider>
</template>

<style lang="scss">
.hero-banner-image {
  @apply h-[95vh];
}

.hero-banner-image img {
  @apply w-full h-full object-cover object-center;
}

.navigator .prev {
  @apply absolute bottom-0 left-4;
}

.navigator .next {
  @apply absolute bottom-0 right-4;
}
</style>
