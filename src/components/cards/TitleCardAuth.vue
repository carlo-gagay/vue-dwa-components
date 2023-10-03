<script setup>
import { IconVisibility } from '@components/svg'

const props = defineProps({
  image: String,
  title: String,
  genres: Object,
  views: String,
  likes: String,
  booksCount: Number,
  chaptersCount: Number,
  issuesCount: Number,
  progress: {
    type: Number,
    validator(value) {
      return value >= 0 && value <= 100
    }
  }
})

const emit = defineEmits(['like'])
</script>

<template>
  <div class="title-card auth">
    <div class="title-card-image">
      <slot name="image-actions"></slot>
      <figure>
        <img :src="image" />
      </figure>
      <!-- progress bars -->
    </div>
    <div class="title-card-details">
      <div class="title-card-details-main">
        <div class="title-infos-container">
          <div class="title-infos">
            <div class="row-centered gap-x-[11px]">
              <div
                v-if="genres"
                v-for="(genre, index) in genres.data"
                class="chip green"
                v-text="genre"
              />
            </div>
            <div v-if="title" class="title mt-[11px]">
              {{ title }}
            </div>
          </div>
        </div>
        <div class="title-actions-container">
          <slot name="header-actions"></slot>
        </div>
      </div>
      <div class="title-card-details-sub">
        <div class="row-centered">
          <div class="statistics-item">
            <IconVisibility />
            <div class="value">{{ views }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
