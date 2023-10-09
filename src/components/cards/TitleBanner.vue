<script setup>
import { IconFavorite, IconBook, IconBookMenu, IconStar, IconVolumeUp } from '@components/svgs'

defineProps({
  author: String,
  books: [Number, String],
  chapters: [Number, String],
  contentRating: String,
  description: String,
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
  url: String
})

const emit = defineEmits(['like', 'playAudio'])
</script>

<template>
  <div class="title-banner">
    <figure v-lazyload>
      <img
        fetchpriority="high"
        :data-url="imgSrc"
        alt="Picsum Image"
        src="/images/placeholder.png"
      />
    </figure>
    <div class="opac column-middle">
      <div class="block max-w-[430px]">
        <div v-if="title" class="title text-white">{{ title }}</div>
        <div class="row-middle gap-x-4 mt-1">
          <div v-if="author" class="sub-heading-2 text-white">{{ author }}</div>
          <div v-if="genres?.length" class="sub-heading-2 text-white">
            <span v-for="(genre, index) in genres.data">
              {{ genre }}
              <span v-if="index < genres.data.length - 1">,&#32;</span>
            </span>
          </div>
        </div>
        <div class="row-middle gap-x-[10px] mt-4">
          <div v-if="likes" class="row-middle gap-x-[4.5px]">
            <IconFavorite class="w-3 h-3 text-white" />
            <div class="caption text-white">{{ likes }}</div>
          </div>
          <div v-if="rating" class="badge yellow">
            <IconStar class="w-3 h-3" />
            <div class="caption">{{ rating }}</div>
          </div>
          <div v-if="contentRating" class="badge orange">
            <div class="caption">{{ contentRating }}</div>
          </div>
          <div v-if="hasAudio" class="badge white" @click="emit('playAudio')">
            <IconVolumeUp class="w-3 h-3" />
            <div class="caption">Audio Available</div>
          </div>
          <div v-if="books" class="row-middle gap-x-[6px] text-white">
            <IconBookMenu class="w-3 h-3" />
            <div class="small-text">Books: {{ books }}</div>
          </div>
          <div v-if="chapters" class="row-middle gap-x-[6px] text-white">
            <IconBookMenu class="w-3 h-3" />
            <div class="small-text">Chapters: {{ chapters }}</div>
          </div>
          <div v-if="issues" class="row-middle gap-x-[6px] text-white">
            <IconBookMenu class="w-3 h-3" />
            <div class="small-text">Issues: {{ issues }}</div>
          </div>
        </div>
        <div v-if="description" class="paragraph mt-[20px] text-white ellipsable">
          <input :id="id" type="checkbox" />
          <span class="text">{{ description }}</span>
          <label :for="id" class="primary">See More</label>
        </div>
        <div class="mt-6 row-middle gap-x-6">
          <a v-if="url" :href="url" class="btn md primary"> Start Reading </a>
          <button class="btn primary-inline" role="button">
            <IconFavorite class="w-10 h-10" />
          </button>
          <button class="btn primary-inline" role="button">
            <IconBook class="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-banner {
  figure,
  img {
    @apply m-0 w-full h-full;
  }
  img {
    @apply object-cover object-center bg-cover bg-center;
  }
}
</style>
