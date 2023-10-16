<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { ReadersLayout } from '@components/layouts'
import { TitleCardBanner } from '@components/cards'
import { Slider } from '@components/sliders'
import {
  IconArrowBackIos,
  IconArrowForwardIos,
  IconSearch,
  IconTune,
  IconQueue
} from '@components/svgs'
import { AppTab, AppTabItem } from '@components/tabs'
import {
  AudioAvailabilityFilter,
  CompletionFilter,
  ContentRatingFilter,
  GenreFilter
} from '@features/filters'
import { title, genresFromApi } from '@stores/sample'

const TitleCardDetailed = defineAsyncComponent(() =>
  import('@components/cards/TitleCardDetailed.vue')
)

const filtersShown = ref(false)

const filtersData = ref({
  genres: [],
  completions: [],
  contentRatings: [],
  audioAvailabilities: []
})

const breakpoints = {
  '(min-width: 640px)': {
    slides: { perView: 2, spacing: 21 }
  },
  '(min-width: 1024px)': {
    slides: { perView: 4, spacing: 21 }
  }
}
</script>

<template>
  <ReadersLayout v-once>
    <div class="container-flex">
      <Slider :loop="true" v-once>
        <template #default="{ navigator }">
          <div v-for="n in 5" class="keen-slider__slide dark" :key="n" v-once>
            <TitleCardBanner
              :alt="`${title.title} ${n}`"
              :author="title.author"
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
              @onBookmark="() => {}"
              @playAudio="() => {}"
              @like="() => {}"
              @onStartReading="
                () => {
                  $router.push('/comic-page')
                }
              "
            />
            <button class="nav-btn backward btn btn-primary-inline" @click="navigator.prev">
              <IconArrowBackIos class="w-[40px] h-[40px]" />
            </button>
            <button class="nav-btn forward btn btn-primary-inline" @click="navigator.next">
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
          mode="free"
          :breakpoints="breakpoints"
          :drag="true"
          :per-view="1"
          :spacing="20"
          :style="{ overflow: 'visible' }"
          v-once
        >
          <div v-for="n in 9" :key="n" class="keen-slider__slide" v-once>
            <TitleCardDetailed
              :alt="`${title.title} ${n}`"
              :author="title.author"
              :books="title.books"
              :chapters="title.chapters"
              :hasAudio="true"
              :id="`cr${n}`"
              :image="`https://picsum.photos/19${n}`"
              :isAudioPlaying="false"
              :progress="Number(`${5}${n}`)"
              :title="`${title.title} ${n}`"
              @onClick="() => $router.push('/comics')"
              @onPlayAudio="() => console.log('audio playing')"
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
      <AppTab size="lg" class="gap-x-[50px]" v-once>
        <AppTabItem title="All Comics" :active="true" />
        <AppTabItem title="My Bookshelf (5)" />
        <AppTabItem title="My Favorites (3)" />
      </AppTab>
      <div class="row-middle justify-end gap-x-[22px]">
        <button>
          <IconSearch class="w-[30px] h-[30px]" />
        </button>
        <button @click="() => (filtersShown = !filtersShown)">
          <IconTune class="w-[30px] h-[30px]" />
        </button>
        <v-dropdown class="dropdown" placement="bottom-end">
          <button>
            <IconQueue class="w-[30px] h-[30px]" />
          </button>
          <template #popper>
            <div class="dropdown-popper min-w-[166px]">
              <div class="dropdown-item">
                <div class="row-middle justify-start">
                  <i class="icon icon-minus-solid icon--s16"></i>
                  A to Z
                </div>
              </div>
            </div>
          </template>
        </v-dropdown>
      </div>
    </div>
    <div v-if="filtersShown" class="container-flex mt-[28px]">
      <div class="filter-container w-full px-10 py-2.5">
        <div class="inner row-middle justify-between">
          <div class="dropdowns row-middle gap-x-[20px]">
            <GenreFilter
              class="p-1"
              :data="filtersData.genres"
              @onDataShow="
                () => {
                  filtersData.genres = genresFromApi
                }
              "
              v-once
            />
            <CompletionFilter
              class="p-1"
              :data="filtersData.completions"
              @onDataShow="
                () => {
                  filtersData.completions = genresFromApi
                }
              "
              v-once
            />
            <ContentRatingFilter
              class="p-1"
              :data="filtersData.contentRatings"
              @onDataShow="
                () => {
                  filtersData.contentRatings = genresFromApi
                }
              "
              v-once
            />
            <AudioAvailabilityFilter
              class="p-1"
              :data="filtersData.audioAvailabilities"
              @onDataShow="
                () => {
                  filtersData.audioAvailabilities = genresFromApi
                }
              "
              v-once
            />
          </div>
          <div class="">
            <button class="btn md-equal btn-trans-black-inline" @click="() => {}">
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-padded-40">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[21px] gap-y-10">
        <div v-for="n in 9" class="relative" :key="n" v-once>
          <TitleCardDetailed
            class="expose-details-on-hover"
            :alt="`${title.title} ${n}`"
            :author="title.author"
            :content-rating="title.contentRating"
            :description="title.description"
            :genres="title.genres"
            :hasAudio="true"
            :id="`ac${n}`"
            :image="`${title.image}${n}`"
            :isAudioPlaying="false"
            :likes="title.likes"
            :published="title.published"
            :title="`${title.title} ${n}`"
            @onClick="() => $router.push('/comics')"
            @onPlayAudio="() => console.log('audio playing')"
          />
        </div>
      </div>
    </div>
  </ReadersLayout>
</template>

<style>
@import 'floating-vue/dist/style.css';

.filter-container {
  background: #eae1c5;
  box-shadow: 0px 0px 8px 0px rgba(12, 11, 11, 0.2);
}
</style>
