<script setup>
import Grid from 'vue-virtual-scroll-grid'
import { ChapterCard } from '@components/cards'
import { ReadersFullContentLayout } from '@layouts'
import { chapter } from '@stores/sample'

const pageProvider = async (pageNumber, pageSize) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(new Array(pageSize).fill(chapter)), 1000)
  })
}
</script>

<template>
  <ReadersFullContentLayout @onBack="() => $router.push('/comics')">
    <div class="column-middle gap-y-[26px] items-center">
      <div class="text-[36.993px] dark:text-white">Comic Title</div>
      <div class="text-[55.681px] dark:text-neutral-white">
        Book 01: <strong>Title Goes Here</strong>
      </div>
    </div>
    <div class="mt-[66px]">
      <Grid
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[45px]"
        :length="9"
        :pageSize="3"
        :pageProvider="pageProvider"
        v-once
      >
        <template #probe="{ style }">
          <div class="w-[292.778px] h-[453.519px]" :style="style"></div>
        </template>
        <template #default="{ item, style, index }">
          <ChapterCard
            :alt="`${item.title} ${index}`"
            :comments="item.comments"
            :image="`${item.image}${index}`"
            :pages="item.pages"
            :published="item.published"
            :style="style"
            :subtitle="item.subtitle"
            :title="`${item.title} ${index}`"
            @onClick="() => $router.push('/comic-page')"
            v-once
          />
        </template>
      </Grid>
    </div>
  </ReadersFullContentLayout>
</template>
