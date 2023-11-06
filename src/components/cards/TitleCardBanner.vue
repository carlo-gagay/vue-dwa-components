<script setup>
import { IconFavorite, IconBook, IconBookMenu, IconStar, IconVolumeUp } from '@components/svgs'

defineProps({
  alt: String,
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

const emit = defineEmits(['onAuthorClick', 'onBookmark', 'onLike', 'onPlayAudio', 'onStartReading'])
</script>

<template>
  <div class="title-banner">
    <figure v-lazyload class="full-image">
      <img fetchpriority="high" src="/images/placeholder.png" :alt="alt" :data-url="imgSrc" />
    </figure>
    <div class="opac"></div>
    <div class="content column-middle">
      <div class="block max-w-[430px]">
        <div v-if="title" class="text-title title-banner-texts">{{ title }}</div>
        <div class="row-middle gap-x-4 mt-1">
          <button
            v-if="author"
            class="text-sub-heading-2 title-banner-texts"
            @click="emit('onAuthorClick')"
          >
            {{ author }}
          </button>
          <template v-if="showGenresInSubtitle">
            <i class="icon icon-minus-solid icon--s4 hideable-hidden title-banner-texts"></i>
            <div class="text-sub-heading-2 title-banner-texts">
              <span v-for="(genre, index) in genres" :key="index">
                {{ genre }}
                <span v-if="index < genres.length - 1">,&#32;</span>
              </span>
            </div>
          </template>
          <template v-if="brandName">
            <i class="icon icon-minus-solid icon--s4 hideable-hidden title-banner-texts"></i>
            <span class="text-sub-heading-2 title-banner-texts">{{ brandName }}</span>
            <i class="icon icon-information-outline icon--s20 text-neutral-02"></i>
          </template>
        </div>
        <div class="row-middle gap-x-[10px] mt-4">
          <div v-if="likes" class="row-middle gap-x-[4.5px]">
            <IconFavorite class="w-3 h-3 title-banner-texts" />
            <div class="text-caption title-banner-texts">{{ likes }}</div>
          </div>
          <div v-if="rating" class="badge badge-yellow">
            <IconStar class="w-3 h-3" />
            <div class="text-caption">{{ rating }}</div>
          </div>
          <div v-if="contentRating" class="badge badge-orange">
            <div class="text-caption">{{ contentRating }}</div>
          </div>
          <div v-if="hasAudio" class="badge badge-white" @click="emit('onPlayAudio')">
            <IconVolumeUp class="w-3 h-3" />
            <div class="text-caption">Audio Available</div>
          </div>
          <div v-if="books" class="row-middle gap-x-[6px] title-banner-texts">
            <IconBookMenu class="w-3 h-3" />
            <div class="text-small-text">Books: {{ books }}</div>
          </div>
          <div v-if="chapters" class="row-middle gap-x-[6px] title-banner-texts">
            <IconBookMenu class="w-3 h-3" />
            <div class="text-small-text">Chapters: {{ chapters }}</div>
          </div>
          <div v-if="issues" class="row-middle gap-x-[6px] title-banner-texts">
            <IconBookMenu class="w-3 h-3" />
            <div class="text-small-text">Issues: {{ issues }}</div>
          </div>
          <div v-if="completion" class="badge badge-green">
            <div v-if="genres" class="row-middle gap-x-1">
              <div v-for="(genre, index) in genres" :key="index">
                <div class="text-caption">{{ genre }}</div>
              </div>
            </div>
            <span class="text-caption">| </span>
            <div class="text-caption">{{ completion }}</div>
          </div>
        </div>
        <div
          v-if="description"
          class="mt-[20px] title-banner-texts ellipsable"
          :class="{ disabled: !descriptionEllipsisEnabled }"
        >
          <input :id="id" type="checkbox" />
          <span class="text-body-2 text">{{ description }}</span>
          <label :for="id" class="primary">See More</label>
        </div>
        <div class="mt-6 row-middle gap-x-6">
          <button
            v-if="url"
            :href="url"
            class="btn btn-md btn-secondary"
            role="button"
            @click="emit('onStartReading')"
          >
            Start Reading
          </button>
          <button class="btn btn-secondary-inline" role="button" @click="emit('onLike')">
            <IconFavorite class="w-10 h-10" />
          </button>
          <button class="btn btn-secondary-inline" role="button" @click="emit('onBookmark')">
            <IconBook class="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
