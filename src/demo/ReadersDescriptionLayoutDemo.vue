<script setup>
import Grid from 'vue-virtual-scroll-grid'
import { ReadersDescriptionLayout } from '@components/layouts'
import { TitleCardBanner } from '@components/cards'
import { AppTab, AppTabItem } from '@components/tabs'
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
    </div>
    <div class="container-flex px-4 sm:px-[121px]">
      <AppTab size="lg" class="gap-x-[36px]">
        <AppTabItem title="Issues" :active="true" />
        <AppTabItem title="Community" />
        <AppTabItem title="Casts" />
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
        <template #probe="{ style, index }">
          <div class="w-[255px] h-[395px]" :style="style"></div>
        </template>
        <template #default="{ item, style, index }">
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

<style>
body {
  @apply bg-white;
}
</style>
