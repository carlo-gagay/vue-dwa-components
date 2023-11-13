<script setup>
defineProps({
  alt: String,
  chapterNumber: String,
  comments: [Number, String],
  description: String,
  image: String,
  pages: [Number, String],
  progress: {
    type: Number,
    validator(value) {
      return value >= 0 && value <= 100
    }
  },
  published: String,
  title: String
})
</script>

<template>
  <div class="chapter-card-inline">
    <div class="image-container">
      <div class="opac"></div>
      <figure v-lazyload class="full-image">
        <img src="/images/placeholder.png" :alt="alt" :data-url="image" />
      </figure>
      <div v-if="progress" class="progress-bar absolute-bottom primary h-sm">
        <div class="progress" :style="{ width: `${progress}%` }"></div>
      </div>
    </div>
    <div class="text-container column-start">
      <div class="text-sub-heading-1">{{ chapterNumber }}: {{ title }}</div>
      <div class="body2">{{ description }}</div>
    </div>
    <div class="statistics-container">
      <div class="stat-item stat-item-lg">
        <i class="icon icon-calendar-today icon--s16"></i>
        <span>{{ published }}</span>
      </div>
      <div class="stat-item stat-item-lg">
        <i class="icon icon-menu-book icon--s16"></i>
        <span>{{ pages }}</span>
      </div>
      <div class="stat-item stat-item-lg">
        <i class="icon icon-insert-comment icon--s16"></i>
        <span>{{ comments }}</span>
      </div>
    </div>
  </div>
</template>
