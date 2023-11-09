<script setup>
defineProps({
  alt: String,
  comments: [Number, String],
  image: String,
  pages: String,
  published: String,
  subtitle: String,
  title: String
})

const emits = defineEmits(['onClick'])
</script>

<template>
  <div class="chapter-card">
    <div class="chapter-card-image" @click="emits('onClick')">
      <figure v-lazyload class="full-image">
        <img src="/images/placeholder.png" :data-url="image" :alt="alt" />
      </figure>
    </div>
    <div class="chapter-card-info">
      <div class="info-title">{{ title }}</div>
      <div class="info-subtitle">{{ subtitle }}</div>

      <div class="statistics row-middle">
        <div v-if="published" class="stat-item stat-item-sm">
          <i class="icon icon-calendar-today icon--s18" />
          <span>{{ published }}</span>
        </div>
        <div v-if="pages" class="stat-item stat-item-sm">
          <i class="icon icon-menu-book icon--s18" />
          <span>{{ pages }}</span>
        </div>
        <div v-if="comments" class="stat-item stat-item-sm">
          <i class="icon icon-insert-comment icon--s18" />
          <span>{{ comments }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
