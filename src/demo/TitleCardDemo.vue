<script setup>
import { TitleCardDetailed } from '@components/cards'

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
      <div v-for="n in 8" :key="n" class="relative-container">
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

    <hr />

    <h1>Continue reading cards</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] relative border-box">
      <div v-for="n in 4" :key="n" class="relative-container">
        <TitleCardDetailed
          :title="title.title"
          :author="title.author"
          :image="`https://picsum.photos/19${n}`"
          :hasAudio="true"
          :progress="60"
          :books="100"
          :chapters="20"
        >
          <template #slot-card-body>
            <button>
              <i class="icon icon-dots-horizontal-triple icon--s24"></i>
            </button>
          </template>
        </TitleCardDetailed>
      </div>
    </div>

    <hr />

    <h1>Bookshelf cards</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] relative border-box">
      <div v-for="n in 2" :key="n" class="relative-container">
        <TitleCardDetailed
          class="expose-details-on-hover"
          :title="title.title"
          :author="title.author"
          :published="title.published"
          :description="title.description"
          :genres="title.genres"
          :image="`https://picsum.photos/18${n}`"
          :hasAudio="true"
          :progress="60"
          :content-rating="title.contentRating"
        >
          <template #slot-card-body>
            <button class="hideable-show">
              <i class="icon icon-bookmark icon--s20"></i>
            </button>
          </template>
          <template #footer-actions>
            <button class="hideable-hidden btn md trans-outline">Continue Reading</button>
          </template>
        </TitleCardDetailed>
      </div>
      <div v-for="n in 2" :key="n" class="relative-container">
        <TitleCardDetailed
          class="expose-details-on-hover"
          :title="title.title"
          :author="title.author"
          :published="title.published"
          :description="title.description"
          :genres="title.genres"
          :image="`https://picsum.photos/18${n}`"
          :hasAudio="true"
          :progress="0"
          :content-rating="title.contentRating"
        >
          <template #slot-card-body>
            <button class="hideable-show">
              <i class="icon icon-heart icon--s20"></i>
            </button>
          </template>
          <template #footer-actions>
            <button class="hideable-hidden btn md primary">Start Reading</button>
          </template>
        </TitleCardDetailed>
      </div>
    </div>

    <br />
    <br />
  </div>
</template>
