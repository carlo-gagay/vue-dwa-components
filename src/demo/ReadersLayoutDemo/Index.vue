<script setup>
import Grid from 'vue-virtual-scroll-grid'
import { ref, defineAsyncComponent } from 'vue'
import { ReadersLayout } from '@layouts'
import { TitleCardBanner } from '@components/cards'
import { ContentSlider } from '@components/sliders'
import { AppTab, TabItem } from '@components/tabs'
import { SelectableFilter } from '@features/filters'
import { filterOptions, title, genresFromApi } from '@stores/sample'

const TitleCardBasic = defineAsyncComponent(() => import('@components/cards/TitleCardBasic.vue'))

const TitleCardDetailed = defineAsyncComponent(() =>
  import('@components/cards/TitleCardDetailed.vue')
)

const filtersShown = ref(false)
const hasInQueue = ref(true)
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
      <ContentSlider
        sliderItemClasses="dark"
        :data="[title, title, title, title, title]"
        :loop="true"
        v-once
      >
        <template #default="{ item, index, navigator }">
          <TitleCardBanner
            :alt="`${item.title} ${index}`"
            :author="item.author"
            :books="item.books"
            :chapters="item.chapters"
            :content-rating="item.contentRating"
            :description="item.description"
            :genres="item.genres"
            :hasAudio="true"
            :id="`banner${index}`"
            :img-src="`https://picsum.photos/80${index}`"
            :isAudioPlaying="false"
            :likes="item.likes"
            :rating="item.rating"
            :title="`${item.title} ${index}`"
            :url="item.url"
            @onAuthorClick="() => $router.push('/author')"
            @onBookmark="() => {}"
            @playAudio="() => {}"
            @like="() => {}"
            @onStartReading="
              () => {
                $router.push('/comic-page')
              }
            "
            v-once
          />
          <button class="nav-btn backward btn btn-primary-inline" @click="navigator.prev">
            <i class="icon icon-arrow-back-ios icon--s40"></i>
          </button>
          <button class="nav-btn forward btn btn-primary-inline" @click="navigator.next">
            <i class="icon icon-arrow-forward-ios icon--s40"></i>
          </button>
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
      </ContentSlider>
    </div>
    <!-- Continue reading -->
    <div class="container-padded-40 pb-0">
      <div class="text-heading-1">Continue Reading</div>
      <div v-if="hasInQueue" class="mt-[20px]">
        <ContentSlider
          mode="free"
          sliderClasses="banner-slider-responsive"
          :breakpoints="breakpoints"
          :data="[title, title, title, title, title, title, title, title]"
          :drag="true"
          :per-view="1"
          :spacing="20"
          v-once
        >
          <template #default="{ item, index }">
            <TitleCardBasic
              :alt="`${item.title} ${index}`"
              :author="item.author"
              :books="item.books"
              :chapters="item.chapters"
              :hasAudio="true"
              :id="`cr${index}`"
              :image="`https://picsum.photos/19${index}`"
              :isAudioPlaying="false"
              :progress="Number(`${5}${index}`)"
              :title="`${item.title} ${index}`"
              @onClick="() => $router.push('/comics')"
              @onPlayAudio="() => console.log('audio playing')"
              v-once
            >
              <template #slot-card-body>
                <VDropdown class="dropdown" placement="bottom-start">
                  <button>
                    <i class="icon icon-more-vert icon--s24"></i>
                  </button>
                  <template #popper>
                    <div class="dropdown-popper type-1">
                      <div class="dropdown-item">
                        <i class="icon icon-remove-circle-outline icon--s20"></i>
                        <div class="text-body-2">Remove from Continue Reading</div>
                      </div>
                      <div class="dropdown-item">
                        <i class="icon icon-favorite-border icon--s20"></i>
                        <div class="text-body-2">Add to My Favorites</div>
                      </div>
                      <div class="dropdown-item">
                        <i class="icon icon-bookmark-border icon--s20"></i>
                        <div class="text-body-2">Add to My Bookshelf</div>
                      </div>
                    </div>
                  </template>
                </VDropdown>
              </template>
            </TitleCardBasic>
          </template>
        </ContentSlider>
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
      <AppTab class="gap-x-4 md:gap-x-[50px]" size="lg" v-once>
        <TabItem title="All Comics" :active="true" />
        <TabItem title="My Bookshelf (5)" />
        <TabItem title="My Favorites (3)" />
      </AppTab>
      <div class="row-middle justify-end gap-x-[22px]">
        <button @click="() => $router.push('/search')">
          <i class="icon icon-search icon--s30"></i>
        </button>
        <button @click="() => (filtersShown = !filtersShown)">
          <i class="icon icon-tune icon--s30"></i>
        </button>
        <v-dropdown class="dropdown" placement="bottom-end">
          <button>
            <i class="icon icon-sort icon--s30"></i>
          </button>
          <template #popper>
            <div class="dropdown-popper min-w-[166px]">
              <div class="dropdown-item">
                <i class="icon icon-radio-button-checked icon--s16"></i>
                <div class="text-body-1">A to Z</div>
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
            <template v-for="(option, index) in filterOptions" :key="index">
              <SelectableFilter
                :data="option.data"
                :dropdownTitle="option.label"
                :label="option.label"
                @onShow="
                  () => {
                    option.data = genresFromApi
                  }
                "
                v-once
              >
                <template #default="{ item, index }">
                  <div class="row-middle justify-between w-full" :key="index">
                    <div class="row-middle gap-x-3">
                      <i
                        v-if="option.type == 'checkbox'"
                        class="icon icon-check-box-outline-blank icon--s14"
                      ></i>
                      <i
                        v-if="option.type == 'radio'"
                        class="icon icon-radio-button-unchecked icon--s14"
                      ></i>
                      <span class="text-body-2">{{ item }}</span>
                    </div>
                    <span class="text-body-2">123</span>
                  </div>
                </template>
              </SelectableFilter>
            </template>
          </div>
          <div class="">
            <button class="btn btn-md-equal btn-black-text" @click="() => {}">
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
        <template #default="{ item, style, index }">
          <div class="title-card-wrapper" :style="style">
            <TitleCardDetailed
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
              v-once
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
