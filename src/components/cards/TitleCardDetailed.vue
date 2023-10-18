<script setup>
const props = defineProps({
  alt: String,
  author: String,
  books: [Number, String],
  chapters: [Number, String],
  contentRating: String,
  description: String,
  hasAudio: Boolean,
  image: String,
  id: {
    type: String,
    required: true
  },
  isAudioPlaying: Boolean,
  issues: [Number, String],
  genres: Array,
  likes: [Number, String],
  progress: {
    type: Number,
    validator(value) {
      return value >= 0 && value <= 100
    }
  },
  published: String,
  rating: String,
  title: String
})

const emits = defineEmits(['onClick', 'onPlayAudio'])
</script>

<template>
  <div class="title-card" @click.stop="emits('onClick')">
    <div class="title-card-image">
      <button
        v-if="hasAudio"
        class="slot-card-image badge white"
        @click.stop="emits('onPlayAudio')"
        role="button"
      >
        <i class="icon icon-volume-up icon--s12"></i>
        <div class="text-caption">Audio Available</div>
      </button>
      <figure v-lazyload>
        <img :alt="alt" :data-url="image" src="/images/placeholder.png" />
      </figure>
      <div v-if="progress" class="progress-bar absolute-bottom primary h-sm">
        <div class="progress" :style="{ width: `${progress}%` }"></div>
      </div>
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
                <i class="icon icon-minus-solid icon--s4 hideable-hidden"></i>
                <div class="text date hideable-hidden">
                  {{ published }}
                </div>
              </template>
            </div>
          </div>
          <div v-if="books || chapters || issues" class="row-middle statistics">
            <div v-if="books" class="statistic-item books">
              <i class="icon icon-news-paper icon--s10"></i>
              <span>Books: {{ books }}</span>
            </div>
            <div v-if="chapters" class="statistic-item chapters">
              <i class="icon icon-news-paper icon--s10"></i>
              <span>Chapers: {{ chapters }}</span>
            </div>
            <div v-if="issues" class="statistic-item issues">
              <i class="icon icon-news-paper icon--s10"></i>
              <span>Issues: {{ issues }}</span>
            </div>
          </div>
        </div>
        <div class="slot-card-body">
          <slot name="slot-card-body"></slot>
        </div>
      </div>
      <div class="title-card-details-sub">
        <div v-if="description" class="description hideable-hidden ellipsable">
          <input type="checkbox" :name="id" :id="id" />
          <span class="text">{{ description }}</span>
          <label :for="id"></label>
        </div>
        <div v-if="genres || likes" class="row-end justify-between">
          <div v-if="genres || contentRating" class="row-middle hideable-hidden">
            <div
              v-if="genres"
              v-for="(genre, index) in genres"
              class="badge green"
              v-text="genre"
            />
            <div v-if="contentRating" class="badge orange" v-text="contentRating" />
          </div>
          <div class="row-middle">
            <div v-if="likes" class="row-middle gap-x-1">
              <i class="icon icon-heart icon--s12"></i>
              <span class="text-xs">
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
