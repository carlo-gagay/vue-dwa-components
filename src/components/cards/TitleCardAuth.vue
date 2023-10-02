<script setup>
const props = defineProps({
  image: String,
  title: String,
  author: String,
  published: String,
  description: String,
  genres: Object,
  contentRating: String,
  rating: String,
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
            <div v-if="title" class="title">
              {{ title }}
            </div>
            <div v-if="author || published" class="subtitle">
              <div v-if="author" class="text name">
                {{ author }}
              </div>
              <template v-if="published">
                <i class="icon icon-minus-solid icon--s4"></i>
                <div class="text date">
                  {{ published }}
                </div>
              </template>
            </div>
          </div>
          <div
            v-if="booksCount || chaptersCount || issuesCount"
            class="visual-data-inline statistics"
          >
            <div v-if="booksCount" class="statistics-item books">
              <i class="icon icon-news-paper icon--s10"></i>
              <div class="value">Books: {{ booksCount }}</div>
            </div>
            <div v-if="chaptersCount" class="statistics-item chapters">
              <i class="icon icon-news-paper icon--s10"></i>
              <div class="value">Chapers: {{ chaptersCount }}</div>
            </div>
            <div v-if="issuesCount" class="statistics-item issues">
              <i class="icon icon-news-paper icon--s10"></i>
              <div class="value">Issues: {{ issuesCount }}</div>
            </div>
          </div>
        </div>
        <div class="title-actions-container">
          <slot name="header-actions"></slot>
        </div>
      </div>
      <div class="title-card-details-sub">
        <p v-if="description" class="description">
          {{ description }}
        </p>
        <div v-if="genres || likes" class="visual-data">
          <div v-if="genres || contentRating" class="visual-data-inline">
            <div
              v-if="genres"
              v-for="(genre, index) in genres.arr"
              class="chip green"
              v-text="genre"
            />
            <div v-if="contentRating" class="chip orange" v-text="contentRating" />
          </div>
          <div class="visual-data-inline">
            <div v-if="likes" class="user-interaction-counter">
              <i class="icon icon-heart icon--s12"></i>
              <span class="text">
                {{ likes }}
              </span>
            </div>
            <slot name="footer-actions"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
