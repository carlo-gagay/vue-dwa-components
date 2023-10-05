<script setup>
import { GuestLayout } from '@components/layouts'
import { TitleCardBanner, TitleCardDetailed } from '@components/cards'
import { Slider } from '@components/sliders'
import { IconArrowBackIos, IconArrowForwardIos } from '@components/svgs'

const title = {
  image: 'https://picsum.photos/20',
  title: 'Never Heroes',
  author: 'Angela Martin',
  published: '26 January, 2023',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  genres: {
    arr: ['Supehero', 'Comedy']
  },
  contentRating: 'Young Adult',
  likes: '100k'
}

const banner = {
  image: 'https://picsum.photos/80',
  title: 'The Glove',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  author: 'Paul Graham',
  genres: {
    data: ['Action', 'Fantacy']
  },
  likes: '10k',
  rating: '4.5',
  contentRating: 'Everyone',
  audio: '',
  books: 5,
  chapters: 20,
  url: '/'
}
</script>

<template>
  <GuestLayout>
    <div class="container-flex">
      <Slider :loop="true">
        <template #default="{ navigator }">
          <div v-for="n in 5" class="keen-slider__slide" :key="n">
            <TitleCardBanner
              :audioSrc="banner.audio"
              :author="banner.author"
              :books="banner.books"
              :chapters="banner.chapters"
              :content-rating="banner.contentRating"
              :description="banner.description"
              :genres="banner.genres"
              :img-src="`${banner.image}${n}`"
              :likes="banner.likes"
              :rating="banner.rating"
              :title="banner.title"
              :url="banner.url"
            />
            <button class="nav-btn backward btn primary-inline" @click="navigator.prev">
              <IconArrowBackIos class="w-[40px] h-[40px]" />
            </button>
            <button class="nav-btn forward btn primary-inline" @click="navigator.next">
              <IconArrowForwardIos class="w-[40px] h-[40px]" />
            </button>
          </div>
        </template>
      </Slider>
    </div>
    <div class="container-padded-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[21px] gap-y-10">
        <div v-for="n in 12" class="relative" :key="n">
          <TitleCardDetailed
            class="expose-details-on-hover"
            :title="title.title"
            :author="title.author"
            :published="title.published"
            :description="title.description"
            :image="`${title.image}${n}`"
            :genres="title.genres"
            :likes="title.likes"
            :hasAudio="true"
            :content-rating="title.contentRating"
            @playAudio="() => {}"
          />
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
