<script setup>
import Grid from 'vue-virtual-scroll-grid'
import { defineAsyncComponent, reactive, ref } from 'vue'
import { ReadersReadingModeLayout } from '@layouts'
import AsidePanel from './AsidePanel.vue'
import CommentsSidePane from './CommentsSidePane.vue'
import SettingsSidePane from './SettingsSidePane.vue'
import ReadingPanel from './ReadingPanel.vue'
import { AppModal } from '@components/modals'
import { chapter, pages } from '@stores/sample'

const ChapterCardInline = defineAsyncComponent(() =>
  import('@components/cards/ChapterCardInline.vue')
)

const asideShown = ref(false)

const modal = reactive({
  shown: false
})

const onAsideShow = () => (asideShown.value = true)
const onAsideClose = () => (asideShown.value = false)
const onModalOpen = () => (modal.shown = true)
const onModalClose = () => (modal.shown = false)

const pageProvider = async (pageNumber, pageSize) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(new Array(pageSize).fill(chapter)), 1000)
  })
}
</script>

<template>
  <ReadersReadingModeLayout :aside-shown="asideShown" @on-back-click="() => $router.go(-1)">
    <template #slot-content-header>
      <div class="text-body-2 text-neutral-white">
        <strong>The Glove</strong> | <strong>Chapter 3:</strong> A Twist of a Knife
      </div>
    </template>
    <template #slot-content-body>
      <ReadingPanel
        :pages="pages"
        @on-aside-show="onAsideShow"
        @on-aside-close="onAsideClose"
        @on-modal-open="onModalOpen"
      />
      <AppModal :shown="modal.shown" @onClose="onModalClose">
        <div class="relative p-[27px] w-[1124px]">
          <div class="heading">
            <div class="column-center text-center text-neutral-white">
              <div class="text-heading-2">The Glove</div>
              <div class="text-sub-heading-2">Chapter 3: A Twist of a Knife</div>
            </div>
            <button
              class="absolute close-btn btn btn-trans-white-inline top-[2.75rem] -right-8"
              @click="onModalClose"
            >
              <i class="icon icon-close icon--s32"></i>
            </button>
          </div>
          <div class="mt-[34px] overflow-y-auto h-[475px] rounded-[5px] px-[26px]">
            <Grid
              class="grid grid-cols-1 gap-y-4"
              :length="8"
              :page-size="3"
              :page-provider="pageProvider"
              v-once
            >
              <template #probe="{ style }">
                <div :style="[style, { height: '216px' }]"></div>
              </template>
              <template #default="{ item, style, index }">
                <div :style="style" :key="index">
                  <ChapterCardInline
                    :alt="item.title"
                    :chapter-number="`${item.chapterNumber}${index}`"
                    :comments="item.comments"
                    :description="item.description"
                    :image="`${item.image}${index}`"
                    :pages="item.pages"
                    :progress="item.progress"
                    :published="item.published"
                    :title="item.title"
                    v-once
                  />
                </div>
              </template>
            </Grid>
          </div>
        </div>
      </AppModal>
    </template>
    <template #slot-content-aside>
      <AsidePanel title="Comments (232)" @on-aside-close="onAsideClose"> </AsidePanel>
    </template>
  </ReadersReadingModeLayout>
</template>
