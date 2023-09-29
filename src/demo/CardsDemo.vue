<script setup>
import { TitleCard } from '@components/cards'

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
</script>

<template>
  <div class="p-8 bg-[#FFFCF3] border-box relative flex flex-col gap-y-4">
    <h1>Universal title cards</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] relative border-box">
      <div v-for="n in 4" :key="n" class="relative-container">
        <TitleCard
          class="minimal-default"
          :title="title.title"
          :author="title.author"
          :published="title.published"
          :description="title.description"
          :image="`${title.image}${n}`"
          :genres="title.genres"
          :likes="title.likes"
          :audio="{ src: '' }"
          :content-rating="title.contentRating"
          @playAudio="() => {}"
        />
      </div>
    </div>

    <hr />

    <h1>Continue reading cards</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] relative border-box">
      <div v-for="n in 4" :key="n" class="relative-container">
        <TitleCard
          :title="title.title"
          :author="title.author"
          :image="`https://picsum.photos/19${n}`"
          :audio="{ src: '' }"
          :progress="60"
          :books-count="100"
          :chapters-count="20"
        >
          <template #header-actions>
            <button>
              <i class="icon icon-dots-horizontal-triple icon--s24"></i>
            </button>
          </template>
        </TitleCard>
      </div>
    </div>

    <hr />

    <h1>Bookshelf cards</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] relative border-box">
      <div v-for="n in 2" :key="n" class="relative-container">
        <TitleCard
          class="minimal-default"
          :title="title.title"
          :author="title.author"
          :published="title.published"
          :description="title.description"
          :genres="title.genres"
          :image="`https://picsum.photos/18${n}`"
          :audio="{ src: '' }"
          :progress="60"
          :content-rating="title.contentRating"
        >
          <template #header-actions>
            <button class="hideable-show">
              <i class="icon icon-bookmark icon--s20"></i>
            </button>
          </template>
          <template #footer-actions>
            <button class="hideable-hidden btn trans-outline">Continue Reading</button>
          </template>
        </TitleCard>
      </div>
      <div v-for="n in 2" :key="n" class="relative-container">
        <TitleCard
          class="minimal-default"
          :title="title.title"
          :author="title.author"
          :published="title.published"
          :description="title.description"
          :genres="title.genres"
          :image="`https://picsum.photos/18${n}`"
          :audio="{ src: '' }"
          :progress="0"
          :content-rating="title.contentRating"
        >
          <template #header-actions>
            <button class="hideable-show">
              <i class="icon icon-heart icon--s20"></i>
            </button>
          </template>
          <template #footer-actions>
            <button class="hideable-hidden btn primary">Start Reading</button>
          </template>
        </TitleCard>
      </div>
    </div>

    <br />
    <br />
  </div>
</template>
