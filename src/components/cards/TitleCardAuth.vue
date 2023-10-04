<script setup>
import {
  IconVisibility,
  IconBook,
  IconDescription,
  IconBookMenu,
  IconThumbUp
} from '@components/svgs'

const props = defineProps({
  image: String,
  title: String,
  genres: Object,
  views: [Number, String],
  likes: [Number, String],
  books: [Number, String],
  chapters: [Number, String],
  issues: [Number, String],
  pages: [Number, String],
  progress: {
    type: Number,
    validator(value) {
      return value >= 0 && value <= 100
    }
  }
})
</script>

<template>
  <div class="title-card auth">
    <div class="title-card-image">
      <div class="slot-card-image">
        <slot name="slot-card-image"></slot>
      </div>
      <figure>
        <img :src="image" />
      </figure>
      <!-- progress bars -->
    </div>
    <div class="title-card-details">
      <div class="title-card-details-main">
        <div class="title-infos-container">
          <div class="title-infos">
            <div class="row-middle gap-x-[7px]">
              <div v-if="genres" v-for="(genre, index) in genres.data" class="chip green">
                {{ genre }}
              </div>
              <div v-else class="chip green-2">No Genre</div>
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
          <div v-if="views" class="statistic-item">
            <IconVisibility class="w-[12px] h-[12px]" />
            <span>{{ views }}</span>
          </div>
          <div v-if="likes" class="statistic-item">
            <IconThumbUp class="w-[12px] h-[12px]" />
            <span>{{ likes }}</span>
          </div>
          <div v-if="books" class="statistic-item">
            <IconBookMenu class="w-[12px] h-[12px]" />
            <span>{{ books }}</span>
          </div>
          <div v-if="chapters" class="statistic-item">
            <IconBook class="w-[12px] h-[12px]" />
            <span>{{ chapters }}</span>
          </div>
          <div v-if="pages" class="statistic-item">
            <IconDescription class="w-[12px] h-[12px]" />
            <span>{{ pages }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
