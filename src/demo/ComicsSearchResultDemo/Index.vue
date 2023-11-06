<script setup>
import Grid from 'vue-virtual-scroll-grid'
import { ReadersDescriptionLayout } from '@layouts'
import { TitleCardDetailed } from '@components/cards'
import { IconSearch, IconTune, IconQueue } from '@components/svgs'
import { relatedGenres, title } from '@stores/sample'

const pageProvider = async (pageNumber, pageSize) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(new Array(pageSize).fill(title)), 1000)
  })
}
</script>

<template>
  <ReadersDescriptionLayout>
    <div class="container-padded-40">
      <div class="row-start justify-between">
        <div class="text-title">Search Results</div>
        <div class="row-middle gap-x-[30px] py-[2px]">
          <div class="form">
            <IconSearch class="w-[30px] h-[30px]" />
          </div>
          <button>
            <IconTune class="w-[30px] h-[30px]" />
          </button>
          <button>
            <IconQueue class="w-[30px] h-[30px]" />
          </button>
        </div>
      </div>
      <div class="row-middle mt-[7px]">
        <div class="text-body-2">Suggested results:</div>
        <div class="row-middle gap-x-[14px]">
          <template v-for="(genres, index) in relatedGenres" :key="index">
            <div class="chip md chip-default-inline">{{ genres }}</div>
          </template>
        </div>
      </div>
      <div class="mt-[21px]">
        <Grid
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[21px] gap-y-10"
          :length="8"
          :pageSize="4"
          :pageProvider="pageProvider"
          v-once
        >
          <template #default="{ item, style, index }">
            <div :style="style" :key="index">
              <TitleCardDetailed
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
                  <button @click.self="() => {}">
                    <i class="icon icon-dots-horizontal-triple icon--s24"></i>
                  </button>
                </template>
              </TitleCardDetailed>
            </div>
          </template>
        </Grid>
      </div>
    </div>
  </ReadersDescriptionLayout>
</template>
