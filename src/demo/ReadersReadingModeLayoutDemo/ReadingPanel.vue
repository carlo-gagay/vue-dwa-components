<script setup>
import { defineAsyncComponent, ref } from 'vue'

const ComicImage = defineAsyncComponent(() => import('@components/comicpage/Image.vue'))

const infiniteMode = ref(false)

const emits = defineEmits(['onAsideClose', 'onAsideShow'])
</script>

<template>
  <div class="reading-pannel">
    <div class="visuals-section" :class="{ infinite: infiniteMode }">
      <div v-if="infiniteMode" class="infinite-scroll-layout-image-container">
        <ComicImage
          class="infinite-scroll-layout-image"
          image="https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-IfhopNUO9l-full.jpg"
          alt="Page 01"
        />
        <ComicImage
          class="infinite-scroll-layout-image"
          image="https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-qzIpix6SeF-full.jpg"
          alt="Page 01"
        />
      </div>
      <div v-else class="page-layout-image-container">
        <ComicImage
          class="page-layout-image"
          image="https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-IfhopNUO9l-full.jpg"
          alt="Page 01"
        />
        <ComicImage
          class="page-layout-image"
          image="https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-qzIpix6SeF-full.jpg"
          alt="Page 01"
        />
      </div>
    </div>

    <button class="bg-music-toggle">
      <i class="icon icon-music-notes icon--s20"></i>
    </button>

    <div class="reading-mode-toggle" @click="() => (infiniteMode = !infiniteMode)">
      <button class="toggle-btn toggle-btn-start active">
        <i class="icon icon-menu icon--s24"></i>
      </button>
      <button class="toggle-btn toggle-btn-end">
        <i class="icon icon-menu icon--s24"></i>
      </button>
    </div>

    <button v-show="!infiniteMode" class="nav-button left">
      <i class="icon icon-cheveron-left icon--s30"></i>
    </button>

    <button v-show="!infiniteMode" class="nav-button right">
      <i class="icon icon-cheveron-right icon--s30"></i>
    </button>

    <div class="controls-section">
      <div class="inner">
        <div class="group controls-group">
          <button class="btn btn-trans-white-inline">
            <i class="icon icon-menu icon--s24"></i>
          </button>
          <button class="btn btn-trans-white-inline">
            <i class="icon icon-zoom-in icon--s24"></i>
          </button>
        </div>
        <div class="group controls-group">
          <button class="btn btn-trans-white-inline">
            <i class="icon icon-cheveron-left icon--s24"></i>
          </button>
          <button class="btn btn-trans-white-inline">
            <i class="icon icon-play-outline icon--s24"></i>
          </button>
          <button class="btn btn-trans-white-inline">
            <i class="icon icon-cheveron-right icon--s24"></i>
          </button>
        </div>
        <div class="group controls-group">
          <button class="btn btn-trans-white-inline" @click="emits('onAsideShow')">
            <i class="icon icon-chat-bubble-dots icon--s24"></i>
          </button>
          <button class="btn btn-trans-white-inline" @click="emits('onAsideShow')">
            <i class="icon icon-tuning icon--s24"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
