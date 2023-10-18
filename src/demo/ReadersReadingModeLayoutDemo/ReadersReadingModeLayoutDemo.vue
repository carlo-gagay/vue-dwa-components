<script setup>
import { defineAsyncComponent, reactive, ref } from 'vue'
import { ReadersReadingModeLayout } from '@layouts'
import AsidePanel from './AsidePanel.vue'
import CommentsSidePane from './CommentsSidePane.vue'
import SettingsSidePane from './SettingsSidePane.vue'
import ReadingPanel from './ReadingPanel.vue'
import { Modal } from '@components/modals'
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
</script>

<template>
  <ReadersReadingModeLayout :asideShown="asideShown" @onBackClick="() => $router.go(-1)">
    <template #slot-content-header>
      <div class="body-2 text-[#fff]">
        <strong>The Glove</strong> | <strong>Chapter 3:</strong> A Twist of a Knife
      </div>
    </template>
    <template #slot-content-body>
      <ReadingPanel
        :pages="pages"
        @onAsideShow="onAsideShow"
        @onAsideClose="onAsideClose"
        @onModalOpen="onModalOpen"
      />
      <Modal :shown="modal.shown" size="lg" theme="transparent" @onClose="onModalClose">
        <div class="relative">
          <div class="column-center text-center text-[#fff]">
            <div class="heading-2">The Glove</div>
            <div class="sub-heading-2">Chapter 3: A Twist of a Knife</div>
          </div>
          <button
            class="absolute close-btn btn btn-trans-white-inline top-2 -right-12"
            @click="onModalClose"
          >
            <i class="icon icon-close icon--s32"></i>
          </button>
        </div>
        <div class="column-start gap-y-4 mt-[34px] overflow-y-auto h-[475px] rounded-[5px]">
          <template v-for="(n, index) in 4" :key="n" v-once>
            <ChapterCardInline
              :alt="chapter.title"
              :chapterNumber="`${chapter.chapterNumber}${n}`"
              :comments="chapter.comments"
              :description="chapter.description"
              :image="`${chapter.image}${index}`"
              :pages="chapter.pages"
              :progress="chapter.progress"
              :published="chapter.published"
              :title="chapter.title"
            />
          </template>
        </div>
      </Modal>
    </template>
    <template #slot-content-aside>
      <AsidePanel title="Comments (232)" @onAsideClose="onAsideClose"> </AsidePanel>
    </template>
  </ReadersReadingModeLayout>
</template>
