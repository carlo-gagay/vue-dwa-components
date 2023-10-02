<script setup>
import 'floating-vue/dist/style.css'
import { TitleCardAuth } from '@components/cards'

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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] relative border-box">
      <div v-for="n in 8" :key="n" class="relative-container">
        <TitleCardAuth
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
        >
          <template #image-actions>
            <v-dropdown class="dropdown" placement="bottom-end" distance="40" skidding="-10">
              <button class="image-top-right-action btn opac round">
                <i class="icon icon-dots-horizontal-triple icon--s20"></i>
              </button>
              <template #popper>
                <div class="dropdown-popper w--180 size--title-auth">
                  <div class="dropdown-item">
                    <i class="icon icon-visibility icon--s16 text-neutral-500"></i>
                    View Preview
                  </div>
                </div>
              </template>
            </v-dropdown>
          </template>
        </TitleCardAuth>
      </div>
    </div>
  </div>
</template>
