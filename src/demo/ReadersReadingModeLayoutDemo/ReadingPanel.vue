<script setup>
import { defineAsyncComponent, ref } from 'vue'
const ComicImage = defineAsyncComponent(() => import('@components/comicpage/ComicImage.vue'))

defineProps({
  pages: Array
})

const infiniteMode = ref(false)

const emits = defineEmits(['onAsideClose', 'onAsideShow', 'onModalOpen'])
</script>

<template>
  <div class="reading-pannel">
    <div class="visuals-section" :class="{ infinite: infiniteMode }">
      <div v-if="infiniteMode" class="infinite-scroll-layout-image-container">
        <template v-for="(page, index) in pages" :key="index">
          <ComicImage class="image-component" :alt="page.title" :image="page.image" />
        </template>
      </div>
      <div v-else class="page-layout-image-container">
        <template v-for="(page, index) in pages" :key="index">
          <ComicImage class="image-component" :alt="page.title" :image="page.image" />
        </template>
      </div>
    </div>

    <button class="bg-music-toggle btn-bgm">
      <i class="icon icon-music-off icon--s20"></i>
    </button>

    <div class="reading-mode-toggle" @click="() => (infiniteMode = !infiniteMode)">
      <button class="toggle-btn toggle-btn-start" :class="{ active: !infiniteMode }">
        <i class="icon icon-menu-book icon--s24"></i>
      </button>
      <button class="toggle-btn toggle-btn-end" :class="{ active: infiniteMode }">
        <i class="icon icon-all-inclusive icon--s24"></i>
      </button>
    </div>

    <button v-show="!infiniteMode" class="nav-button left">
      <i class="icon icon-arrow-back-ios icon--s30"></i>
    </button>

    <button v-show="!infiniteMode" class="nav-button right">
      <i class="icon icon-arrow-forward-ios icon--s30"></i>
    </button>

    <div class="controls-section">
      <div class="inner">
        <div class="group controls-group">
          <button class="btn btn-trans-white-inline" @click="emits('onModalOpen')">
            <i class="icon icon-menu icon--s24"></i>
          </button>
          <button class="btn btn-trans-white-inline">
            <i class="icon icon-search-plus icon--s24"></i>
          </button>
        </div>
        <div class="group controls-group">
          <button class="btn btn-trans-white-inline">
            <i class="icon icon-chevron-double-left icon--s24"></i>
          </button>
          <button class="btn btn-trans-white-inline">
            <i class="icon icon-play-circle-filled icon--s24"></i>
          </button>
          <button class="btn btn-trans-white-inline">
            <i class="icon icon-chevron-double-right icon--s24"></i>
          </button>
        </div>
        <div class="group controls-group">
          <button class="btn btn-trans-white-inline" @click="emits('onAsideShow')">
            <i class="icon icon-textsms icon--s24"></i>
          </button>
          <button class="btn btn-trans-white-inline" @click="emits('onAsideShow')">
            <i class="icon icon-settings icon--s24"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
