<script setup>
import { IconFavorite, IconBookMenu, IconStar, IconVolumeUp } from '@components/svgs'

defineProps({
  audioSrc: String,
  author: String,
  books: [Number, String],
  chapters: [Number, String],
  contentRating: String,
  description: String,
  genres: Object,
  imgSrc: String,
  issues: [Number, String],
  likes: [Number, String],
  rating: [Number, String],
  title: String,
  url: String
})
</script>

<template>
  <div class="title-banner">
    <figure>
      <img :src="imgSrc" alt="Picsum Image" />
    </figure>
    <div class="opac column-middle">
      <div class="block max-w-[430px]">
        <div v-if="title" class="title text-white">{{ title }}</div>
        <div class="row-middle gap-x-4 mt-1">
          <div v-if="author" class="sub-heading-2 text-white">{{ author }}</div>
          <div v-if="genres?.data.length" class="sub-heading-2 text-white">
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
          <div v-if="audioSrc" class="badge white">
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
        <p v-if="description" class="paragraph mt-[20px] text-white">
          {{ description }}
        </p>
        <div v-if="url" class="mt-6">
          <a :href="url" class="btn md primary"> Start Reading </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
figure,
img {
  @apply m-0 w-full h-full;
}
img {
  @apply object-cover object-center;
}
</style>
