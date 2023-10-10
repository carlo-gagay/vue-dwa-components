<script setup>
import { ComicsDescriptionLayout } from '@components/layouts'
import { TitleCardBanner } from '@components/cards'
import { title } from '@stores/sample'
</script>

<template>
  <ComicsDescriptionLayout v-once>
    <div class="container-flex">
      <TitleCardBanner
        id="banner"
        :author="title.author"
        :brandName="title.brandName"
        :completion="title.completion"
        :content-rating="title.contentRating"
        :description="title.description"
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
  </ComicsDescriptionLayout>
</template>
