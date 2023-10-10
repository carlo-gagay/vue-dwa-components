<script setup>
import { IconFavorite, IconBook, IconBookMenu, IconStar, IconVolumeUp } from '@components/svgs'

defineProps({
  author: String,
  books: [Number, String],
  brandName: String,
  chapters: [Number, String],
  completion: String,
  contentRating: String,
  description: String,
  descriptionEllipsisEnabled: {
    type: Boolean,
    default: true
  },
  genres: Array,
  hasAudio: Boolean,
  id: {
    type: String,
    required: true
  },
  imgSrc: String,
  isAudioPlaying: Boolean,
  issues: [Number, String],
  likes: [Number, String],
  rating: [Number, String],
  title: String,
  showGenresInSubtitle: {
    type: Boolean,
    default: true
  },
  url: String
})

const emit = defineEmits(['onBookmark', 'onLike', 'onPlayAudio', 'onStartReading'])
</script>

<template>
  <div class="title-banner">
    <figure v-lazyload class="full-image">
      <img
        fetchpriority="high"
        :data-url="imgSrc"
        alt="Picsum Image"
        src="/images/placeholder.png"
      />
    </figure>
    <div class="opac"></div>
    <div class="content column-middle">
      <div class="block max-w-[430px]">
        <div v-if="title" class="title title-banner-texts">{{ title }}</div>
        <div class="row-middle gap-x-4 mt-1">
          <div v-if="author" class="sub-heading-2 title-banner-texts">{{ author }}</div>
          <template v-if="showGenresInSubtitle">
            <i class="icon icon-minus-solid icon--s4 hideable-hidden title-banner-texts"></i>
            <div class="sub-heading-2 title-banner-texts">
              <span v-for="(genre, index) in genres" v-once>
                {{ genre }}
                <span v-if="index < genres.length - 1">,&#32;</span>
              </span>
            </div>
          </template>
          <template v-if="brandName">
            <i class="icon icon-minus-solid icon--s4 hideable-hidden title-banner-texts"></i>
            <span class="sub-heading-2 title-banner-texts">{{ brandName }}</span>
            <i class="icon icon-information-outline icon--s20 text-[#857E76]"></i>
          </template>
        </div>
        <div class="row-middle gap-x-[10px] mt-4">
          <div v-if="likes" class="row-middle gap-x-[4.5px]">
            <IconFavorite class="w-3 h-3 title-banner-texts" />
            <div class="caption title-banner-texts">{{ likes }}</div>
          </div>
          <div v-if="rating" class="badge yellow">
            <IconStar class="w-3 h-3" />
            <div class="caption">{{ rating }}</div>
          </div>
          <div v-if="contentRating" class="badge orange">
            <div class="caption">{{ contentRating }}</div>
          </div>
          <div v-if="hasAudio" class="badge white" @click="emit('onPlayAudio')">
            <IconVolumeUp class="w-3 h-3" />
            <div class="caption">Audio Available</div>
          </div>
          <div v-if="books" class="row-middle gap-x-[6px] title-banner-texts">
            <IconBookMenu class="w-3 h-3" />
            <div class="small-text">Books: {{ books }}</div>
          </div>
          <div v-if="chapters" class="row-middle gap-x-[6px] title-banner-texts">
            <IconBookMenu class="w-3 h-3" />
            <div class="small-text">Chapters: {{ chapters }}</div>
          </div>
          <div v-if="issues" class="row-middle gap-x-[6px] title-banner-texts">
            <IconBookMenu class="w-3 h-3" />
            <div class="small-text">Issues: {{ issues }}</div>
          </div>
          <div v-if="completion" class="badge green">
            <div v-if="genres" class="row-middle gap-x-1">
              <div v-for="(genre, index) in genres" :key="index" v-once>
                <div class="caption">{{ genre }}</div>
              </div>
            </div>
            <span class="caption">| </span>
            <div class="caption">{{ completion }}</div>
          </div>
        </div>
        <div
          v-if="description"
          class="mt-[20px] title-banner-texts ellipsable"
          :class="{ disabled: !descriptionEllipsisEnabled }"
          v-once
        >
          <input :id="id" type="checkbox" />
          <span class="body-2 text">{{ description }}</span>
          <label :for="id" class="primary">See More</label>
        </div>
        <div class="mt-6 row-middle gap-x-6">
          <button
            v-if="url"
            :href="url"
            class="btn md secondary"
            role="button"
            @click="emit('onStartReading')"
          >
            Start Reading
          </button>
          <button class="btn secondary-inline" role="button" @click="emit('onLike')">
            <IconFavorite class="w-10 h-10" />
          </button>
          <button class="btn secondary-inline" role="button" @click="emit('onBookmark')">
            <IconBook class="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
