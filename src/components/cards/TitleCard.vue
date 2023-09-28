<script setup>
defineProps({
  image: String,
  title: String,
  author: String,
  published: String,
  description: String,
  genres: Object,
  rating: String,
  likes: Number
})
</script>

<template>
  <div class="title-card">
    <div class="img-wrapper">
      <figure>
        <img :src="image" />
      </figure>
      <div class="playable audio-badge white">
        <div class="text">Audio Available</div>
      </div>
    </div>
    <div class="text-wrapper">
      <div class="main-text">
        <div v-if="title" class="title">{{ title }}</div>
        <div v-if="author || published" class="subtitle">
          <div v-if="author" class="text name">{{ author }}</div>
          <div v-if="published" class="text date">{{ published }}</div>
        </div>
      </div>
      <div class="details"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-card {
  .img-wrapper {
    @apply relative;

    figure,
    img {
      @apply m-0 w-full rounded-t-[10px];
    }

    img {
      @apply aspect-[306/190] object-cover object-center;
    }

    .playable {
      @apply absolute right-[10px] top-[10px];
    }
  }

  .text-wrapper {
    .main-text {
      .title {
      }
      .subtitle {
      }
    }
  }
}

.audio-badge {
  @apply p-1 rounded-[2px] flex items-center gap-x-[2px];

  &.white {
    @apply bg-white text-neutral-900;
  }

  .text {
    @apply text-[10px] leading-[14px];
  }
}
</style>
