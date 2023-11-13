<script setup>
defineProps({
  alt: String,
  author: String,
  books: [Number, String],
  chapters: [Number, String],
  hasAudio: Boolean,
  image: String,
  id: {
    type: String,
    required: true
  },
  isAudioPlaying: Boolean,
  issues: [Number, String],
  liked: {
    type: Boolean,
    default: false
  },
  likes: [Number, String],
  progress: {
    type: Number,
    validator(value) {
      return value >= 0 && value <= 100
    }
  },
  title: String,
  titleClasses: {
    type: String,
    default: 'title'
  }
})

const emits = defineEmits(['onClick', 'onPlayAudio'])
</script>

<template>
  <div class="title-card">
    <div class="title-card-image" @click.stop="emits('onClick')">
      <button
        v-if="hasAudio"
        class="slot-card-image badge badge-audio"
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
            <div v-if="title" :class="[titleClasses]">
              {{ title }}
            </div>
            <div v-if="author" class="subtitle">
              <div v-if="author" class="text name">
                {{ author }}
              </div>
            </div>
          </div>
          <div v-if="books || chapters || issues" class="row-middle statistics">
            <div v-if="books" class="stat-item stat-item-sxs statistic-item books">
              <i class="icon icon-menu-book icon--s10"></i>
              <span>Books: {{ books }}</span>
            </div>
            <div v-if="chapters" class="stat-item stat-item-sxs statistic-item chapters">
              <i class="icon icon-auto-stories icon--s10"></i>
              <span>Chapers: {{ chapters }}</span>
            </div>
            <div v-if="issues" class="stat-item stat-item-sxs statistic-item issues">
              <i class="icon icon-description icon--s10"></i>
              <span>Issues: {{ issues }}</span>
            </div>
          </div>
        </div>
        <div class="slot-card-body">
          <slot name="slot-card-body"></slot>
          <template v-if="likes">
            <div class="stat-likes">
              <i
                class="icon icon--s16"
                :class="liked ? 'icon-favorite' : 'icon-favorite-border'"
              ></i>
              <div class="text-caption">{{ likes }}</div>
            </div>
          </template>
        </div>
      </div>
      <div class="title-card-details-sub">
        <div class="row-end justify-between">
          <div class="row-middle">
            <slot name="footer-actions"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
