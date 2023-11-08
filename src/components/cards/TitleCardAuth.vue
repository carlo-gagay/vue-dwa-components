<script setup>
defineProps({
  alt: String,
  books: [Number, String],
  chapters: [Number, String],
  firstStep: {
    type: Number,
    default: 0,
    validator(value) {
      return value >= 0 && value <= 100
    }
  },
  genres: Array,
  id: {
    type: String,
    required: true
  },
  image: String,
  isAudioPlaying: Boolean,
  issues: [Number, String],
  likes: [Number, String],
  pages: [Number, String],
  secondStep: {
    type: Number,
    default: 0,
    validator(value) {
      return value >= 0 && value <= 100
    }
  },
  thirdStep: {
    type: Number,
    default: 0,
    validator(value) {
      return value >= 0 && value <= 100
    }
  },
  title: String,
  views: [Number, String]
})
</script>

<template>
  <div class="title-card auth">
    <div class="title-card-image">
      <div class="slot-card-image">
        <slot name="slot-card-image"></slot>
      </div>
      <figure v-lazyload>
        <img :alt="alt" :data-url="image" src="/images/placeholder.png" />
      </figure>
      <div
        v-if="firstStep || secondStep || thirdStep"
        class="row-middle justify-between absolute-bottom w-full gap-x-[2px]"
      >
        <div class="progress-bar black h-xs">
          <div class="progress" :style="{ width: `${firstStep}%` }"></div>
        </div>
        <div class="progress-bar black h-xs">
          <div class="progress" :style="{ width: `${secondStep}%` }"></div>
        </div>
        <div class="progress-bar black h-xs">
          <div class="progress" :style="{ width: `${thirdStep}%` }"></div>
        </div>
      </div>
    </div>
    <div class="title-card-details">
      <div class="title-card-details-main">
        <div class="title-infos-container">
          <div class="title-infos">
            <div class="row-middle gap-x-[7px]">
              <template v-if="genres">
                <div v-for="(genre, index) in genres" class="badge badge-genre" :key="index">
                  {{ genre }}
                </div>
              </template>
              <div v-else class="badge badge-genre disabled">No Genre</div>
            </div>
            <div v-if="title" class="title mt-[11px]">
              {{ title }}
            </div>
          </div>
        </div>
        <div class="slot-card-body">
          <slot name="slot-card-body"></slot>
        </div>
      </div>
      <div class="title-card-details-sub">
        <div class="row-middle gap-x-[27px]">
          <div v-if="views" class="stat-item stat-item-xs statistic-item">
            <i class="icon icon-visibility icon--s12"></i>
            <span>{{ views }}</span>
          </div>
          <div v-if="likes" class="stat-item stat-item-xs statistic-item">
            <i class="icon icon-thumb-up icon--s12"></i>
            <span>{{ likes }}</span>
          </div>
          <div v-if="books" class="stat-item stat-item-xs statistic-item">
            <i class="icon icon-menu-book icon--s12"></i>
            <span>{{ books }}</span>
          </div>
          <div v-if="chapters" class="stat-item stat-item-xs statistic-item">
            <i class="icon icon-book icon--s12"></i>
            <span>{{ chapters }}</span>
          </div>
          <div v-if="pages" class="stat-item stat-item-xs statistic-item">
            <i class="icon icon-description icon--s12"></i>
            <span>{{ pages }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
