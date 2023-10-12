<script setup>
import { ChapterCard } from '@components/cards'
import { ReadersFullContentLayout } from '@components/layouts'
import { chapter } from '@stores/sample'
</script>

<template>
  <ReadersFullContentLayout @onBack="() => $router.push('/comics')">
    <div class="column-middle gap-y-[26px] items-center">
      <div class="text-[36.993px] dark:text-white">Comic Title</div>
      <div class="text-[55.681px] dark:text-[#FFF]">Book 01: <strong>Title Goes Here</strong></div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[45px] mt-[66px]">
      <div v-for="n in 8" :key="n" v-once>
        <ChapterCard
          :alt="`${chapter.title} ${n}`"
          :comments="chapter.comments"
          :image="`${chapter.image}${n}`"
          :pages="chapter.pages"
          :published="chapter.published"
          :subtitle="chapter.subtitle"
          :title="`${chapter.title} ${n}`"
          @onClick="() => $router.push('/comic-page')"
        />
      </div>
    </div>
  </ReadersFullContentLayout>
</template>
