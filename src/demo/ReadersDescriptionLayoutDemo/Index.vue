<script setup>
import Grid from 'vue-virtual-scroll-grid'
import { ReadersDescriptionLayout } from '@layouts'
import { TitleCardBanner } from '@components/cards'
import { AppTab, TabItem } from '@components/tabs'
import { ComicsCard } from '@components/cards'
import { title } from '@stores/sample'

const pageProvider = async (pageNumber, pageSize) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(new Array(pageSize).fill('')), 1000)
  })
}
</script>

<template>
  <ReadersDescriptionLayout v-once>
    <button class="comic-description-back-arrow" @click="() => $router.push('/')">
      <i class="icon icon-arrow-back-ios icon--s40"></i>
    </button>
    <div class="container-flex">
      <TitleCardBanner
        id="banner"
        :alt="title.title"
        :author="title.author"
        :brandName="title.brandName"
        :completion="title.completion"
        :content-rating="title.contentRating"
        :description="title.description"
        :descriptionEllipsisEnabled="false"
        :genres="title.genres"
        :hasAudio="true"
        :img-src="`https://picsum.photos/80${0}`"
        :isAudioPlaying="false"
        :likes="title.likes"
        :rating="title.rating"
        :showGenresInSubtitle="false"
        :title="title.title"
        :url="title.url"
        @onAuthorClick="() => $router.push('/author')"
        @onBookmark="() => {}"
        @playAudio="() => {}"
        @like="() => {}"
        @onStartReading="() => $router.push('/comic-page')"
        v-once
      />
    </div>
    <div class="container-flex px-4 sm:px-[121px]">
      <AppTab class="gap-x-[36px]">
        <TabItem size="md" title="Issues" :active="true" />
        <TabItem size="md" title="Community" />
        <TabItem size="md" title="Casts" />
      </AppTab>
    </div>
    <div class="container-flex mt-10 px-4 sm:px-[121px]">
      <Grid
        class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-[58px]"
        :length="8"
        :pageSize="4"
        :pageProvider="pageProvider"
        v-once
      >
        <template #probe="{ style }">
          <div class="w-[255px] h-[395px]" :style="style"></div>
        </template>
        <template #default="{ style, index }">
          <ComicsCard
            v-once
            subtitle="June 9, 2023"
            :image="`https://picsum.photos/20${index}`"
            :style="style"
            :title="`Issue ${index}`"
            @onClick="() => $router.push('/chapters')"
          />
        </template>
      </Grid>
    </div>
    <div class="h-[62px]"></div>
  </ReadersDescriptionLayout>
</template>
