<script setup>
import { ReadersComicDescriptionLayout } from '@components/layouts'
import { TitleCardBanner } from '@components/cards'
import { AppTab, AppTabItem } from '@components/tabs'
import { ComicsCard } from '@components/cards'
import { title } from '@stores/sample'
</script>

<template>
  <ReadersComicDescriptionLayout v-once>
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
            $router.push('/comics')
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
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-[58px]">
        <div v-for="n in 8" :key="n" v-once>
          <ComicsCard
            subtitle="June 9, 2023"
            :image="`https://picsum.photos/20${n}`"
            :title="`Issue ${n}`"
            @onClick="() => $router.push('/chapters')"
          />
        </div>
      </div>
    </div>
    <div class="h-[62px]"></div>
  </ReadersComicDescriptionLayout>
</template>

<style>
body {
  @apply bg-white;
}
</style>
