<script setup>
import { ref } from 'vue'
import { ReadersLayout } from '@components/layouts'
import { TitleCardBanner, TitleCardDetailed } from '@components/cards'
import { Slider } from '@components/sliders'
import { IconArrowBackIos, IconArrowForwardIos } from '@components/svgs'
import { AppTab, AppTabItem } from '@components/tabs'
import {
  AudioAvailabilityFilters,
  CompletionFilters,
  ContentRatingFilters,
  GenreFilters
} from '@features/filters'

const title = {
  audio: 'https://duskwave-prod-bucket.s3.amazonaws.com/public/audios/audio-bm-SIq7PNBA0H.mp3',
  author: 'Paul Graham',
  books: 5,
  chapters: 20,
  contentRating: 'Everyone',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  image: 'https://picsum.photos/20',
  genres: ['Action', 'Fantacy'],
  likes: '10k',
  published: '26 January, 2023',
  rating: '4.5',
  title: 'The Glove',
  url: '/'
}

const filtersData = ref({
  genres: [],
  completions: [],
  contentRatings: [],
  audioAvailabilities: []
})

const genresFromApi = [
  'Action',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Slice for Life',
  'Sports'
]
</script>

<template>
  <ReadersLayout>
    <div class="container-flex">
      <Slider :loop="true" v-once>
        <template #default="{ navigator }">
          <div v-for="n in 5" class="keen-slider__slide" :key="n">
            <TitleCardBanner
              :books="title.books"
              :chapters="title.chapters"
              :content-rating="title.contentRating"
              :description="title.description"
              :genres="title.genres"
              :hasAudio="true"
              :id="`banner${n}`"
              :img-src="`https://picsum.photos/80${n}`"
              :isAudioPlaying="false"
              :likes="title.likes"
              :rating="title.rating"
              :title="`${title.title} ${n}`"
              :url="title.url"
              @playAudio="() => {}"
              @like="() => {}"
            />
            <button class="nav-btn backward btn primary-inline" @click="navigator.prev">
              <IconArrowBackIos class="w-[40px] h-[40px]" />
            </button>
            <button class="nav-btn forward btn primary-inline" @click="navigator.next">
              <IconArrowForwardIos class="w-[40px] h-[40px]" />
            </button>
          </div>
        </template>
        <template #navigator="{ navigator }">
          <div class="slide-indicator">
            <button
              v-for="(n, index) in navigator.length"
              class="indicator"
              :key="n"
              :class="{ active: index === navigator.index }"
              @click="navigator.moveToIdx(index)"
            ></button>
          </div>
        </template>
      </Slider>
    </div>
    <div class="container-padded-40 pb-0">
      <div class="heading-1 font-bold">Continue Reading</div>
      <div class="mt-[20px]">
        <Slider
          :drag="true"
          mode="free"
          :per-view="4"
          :spacing="20"
          :style="{ overflow: 'visible' }"
          v-once
        >
          <div v-for="n in 9" :key="n" class="keen-slider__slide">
            <TitleCardDetailed
              :author="title.author"
              :books="title.books"
              :chapters="title.chapters"
              :hasAudio="true"
              :id="`cr${n}`"
              :image="`${title.image}${n}`"
              :isAudioPlaying="false"
              :progress="Number(`${5}${n}`)"
              :title="`${title.title} ${n}`"
              v-once
            >
              <template #slot-card-body>
                <button>
                  <i class="icon icon-dots-horizontal-triple icon--s24"></i>
                </button>
              </template>
            </TitleCardDetailed>
          </div>
        </Slider>
      </div>
    </div>
    <div class="container-padded-40 pb-0 row-middle justify-between">
      <AppTab size="lg">
        <AppTabItem title="All Comics" :active="true" />
        <AppTabItem title="My Bookshelf (5)" />
        <AppTabItem title="My Favorites (3)" />
      </AppTab>
    </div>
    <div class="container-flex mt-[28px]">
      <div class="filter-container w-full px-10 py-2.5">
        <div class="inner row-middle justify-between">
          <div class="dropdowns row-middle gap-x-[20px]">
            <div class="p-1">
              <GenreFilters
                :data="filtersData.genres"
                @onDataShow="
                  () => {
                    filtersData.genres = genresFromApi
                  }
                "
              />
            </div>
            <div class="p-1">
              <CompletionFilters :data="filtersData.completions" @onDataShow="() => {}" />
            </div>
            <div class="p-1">
              <ContentRatingFilters :data="filtersData.contentRatings" @onDataShow="() => {}" />
            </div>
            <div class="p-1">
              <AudioAvailabilityFilters
                :data="filtersData.audioAvailabilities"
                @onDataShow="() => {}"
              />
            </div>
          </div>
          <div class="">
            <button class="btn md-equal trans-black-inline">Clear All Filters</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-padded-40">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[21px] gap-y-10">
        <div v-for="n in 12" class="relative" :key="n">
          <TitleCardDetailed
            class="expose-details-on-hover"
            :title="`${title.title} ${n}`"
            :author="title.author"
            :published="title.published"
            :description="title.description"
            :id="`ac${n}`"
            :image="`${title.image}${n}`"
            :isAudioPlaying="false"
            :genres="title.genres"
            :likes="title.likes"
            :hasAudio="true"
            :content-rating="title.contentRating"
            @playAudio="() => {}"
          />
        </div>
      </div>
    </div>
  </ReadersLayout>
</template>

<style scoped>
.filter-container {
  background: #eae1c5;
  box-shadow: 0px 0px 8px 0px rgba(12, 11, 11, 0.2);
}
</style>
