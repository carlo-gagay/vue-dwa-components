<script setup>
import Grid from 'vue-virtual-scroll-grid'
import { ref, defineAsyncComponent } from 'vue'
import { ReadersLayout } from '@layouts'
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
import { SelectableFilter } from '@features/filters'
import { filterOptions, title, genresFromApi } from '@stores/sample'

const TitleCardDetailed = defineAsyncComponent(() =>
  import('@components/cards/TitleCardDetailed.vue')
)

const filtersShown = ref(false)
const hasInQueue = ref(false)
const isAuth = ref(false)

const breakpoints = {
  '(min-width: 640px)': {
    slides: { perView: 2, spacing: 21 }
  },
  '(min-width: 1024px)': {
    slides: { perView: 4, spacing: 21 }
  }
}

const pageProvider = async (pageNumber, pageSize) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(new Array(pageSize).fill(title)), 1000)
  })
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
              @click="() => navigator.moveToIdx(index)"
            ></button>
          </div>
        </template>
      </Slider>
    </div>
    <!-- Continue reading -->
    <div class="container-padded-40 pb-0">
      <div class="text-heading-1 font-bold">Continue Reading</div>
      <div v-if="hasInQueue" class="mt-[20px]">
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
      <div v-else class="empty-section v-padding-37-209">
        <div class="inner">
          <div class="icon-wrapper">
            <i class="icon icon-news-paper icon--s100"></i>
          </div>
          <div class="title">No Comics In Queue</div>
          <div class="subtitle">The comics you are currently reading will appear here</div>
        </div>
      </div>
    </div>
    <!-- App tab -->
    <div class="container-padded-40 pb-0 column-start lg:row-middle justify-between gap-y-10">
      <AppTab size="lg" class="gap-x-4 md:gap-x-[50px]" v-once>
        <AppTabItem title="All Comics" :active="true" />
        <AppTabItem title="My Bookshelf (5)" />
        <AppTabItem title="My Favorites (3)" />
      </AppTab>
      <div class="row-middle justify-end gap-x-[22px]">
        <button @click="() => $router.push('/search')">
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
    <!-- Comic filters -->
    <div v-if="filtersShown" class="container-flex mt-[28px] transition">
      <div class="filter-container w-full px-4 sm:px-10 py-2.5">
        <div class="inner column-start sm:row-middle justify-between gap-y-2">
          <div class="dropdowns column-start sm:row-middle gap-x-[20px] gap-y-2">
            <template v-for="(option, indx) in filterOptions" v-once>
              <SelectableFilter
                :data="option.data"
                :dropdownTitle="option.label"
                :label="option.label"
                @onShow="
                  () => {
                    option.data = genresFromApi
                  }
                "
              >
                <template #default="{ item, index }">
                  <div class="row-middle justify-between w-full" :key="index">
                    <div class="row-middle gap-x-3">
                      <i class="icon icon-box icon--s14"></i>
                      <span class="text-body-2">{{ item }}</span>
                    </div>
                    <span class="text-body-2">123</span>
                  </div>
                </template>
              </SelectableFilter>
            </template>
          </div>
          <div class="">
            <button class="btn btn-md-equal btn-trans-black-inline" @click="() => {}">
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- First list of comic titles -->
    <div class="container-padded-40">
      <Grid
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[21px] gap-y-10"
        :length="8"
        :pageSize="4"
        :pageProvider="pageProvider"
        v-once
      >
        <template #default="{ item, style, index }">
          <div class="title-card-wrapper" :style="style">
            <TitleCardDetailed
              v-once
              class="expose-details-on-hover"
              :alt="`${item.title} ${index}`"
              :author="item.author"
              :content-rating="item.contentRating"
              :description="item.description"
              :genres="item.genres"
              :hasAudio="true"
              :id="`ac${index}`"
              :image="`${item.image}${index}`"
              :isAudioPlaying="false"
              :likes="item.likes"
              :published="item.published"
              :title="`${item.title} ${index}`"
              @onClick="() => $router.push('/comics')"
              @onPlayAudio="() => console.log('audio playing')"
            />
          </div>
        </template>
      </Grid>
    </div>
    <!-- call to action section -->
    <div v-if="!isAuth" class="cta-section-container">
      <div class="inner column-start sm:row-middle justify-between gap-y-4">
        <div class="message">Save your progress and your favorite comics...</div>
        <button class="btn btn-md btn-secondary">Sign Up</button>
      </div>
    </div>
    <!-- Second list of comic titles -->
    <div class="container-padded-40" :class="{ 'pt-0': isAuth }">
      <Grid
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[21px] gap-y-10"
        :length="4"
        :pageSize="4"
        :pageProvider="pageProvider"
        v-once
      >
        <template #default="{ item, style, index }" v-once>
          <div class="title-card-wrapper" :style="style">
            <TitleCardDetailed
              v-once
              class="expose-details-on-hover"
              :alt="`${item.title} ${index}`"
              :author="item.author"
              :content-rating="item.contentRating"
              :description="item.description"
              :genres="item.genres"
              :hasAudio="true"
              :id="`acc${index}`"
              :image="`${item.image}${index}`"
              :isAudioPlaying="false"
              :likes="item.likes"
              :published="item.published"
              :title="`${item.title} ${index}`"
              @onClick="() => $router.push('/comics')"
              @onPlayAudio="() => console.log('audio playing')"
            />
          </div>
        </template>
      </Grid>
    </div>
  </ReadersLayout>
</template>

<style lang="scss">
@import 'floating-vue/dist/style.css';

.title-card-wrapper {
  z-index: 10;

  &:hover {
    z-index: 20;
  }
}
</style>
