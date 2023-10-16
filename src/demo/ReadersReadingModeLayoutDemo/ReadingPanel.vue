<script setup>
import { ref } from 'vue'
import { ComicImage } from '@components/comicpage'

const infiniteMode = ref(true)

const emits = defineEmits(['onAsideShow'])
</script>

<template>
  <div class="reading-pannel">
    <div class="visuals-section" :class="{infinite: infiniteMode}">
      <div v-if="infiniteMode" class="infinite-scroll-layout-image-container">
        <ComicImage
          class="infinite-scroll-layout-image"
          image="https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-IfhopNUO9l-full.jpg"
          alt="Page 01"
        />
        <ComicImage
          class="infinite-scroll-layout-image"
          image="https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-IfhopNUO9l-full.jpg"
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
          image="https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-IfhopNUO9l-full.jpg"
          alt="Page 01"
        />
      </div>
    </div>

    <button class="bg-music-toggle">
      <i class="icon icon-music-notes icon--s20"></i>
    </button>

    <div class="row-middle absolute right-10 top-[33px]">
      <button class="btn btn-secondary border border-[#0C0B0B] p-2 rounded-l-[5px]">
        <i class="icon icon-menu icon--s24"></i>
      </button>
    </div>

    <button class="nav-button left">
      <i class="icon icon-cheveron-left icon--s30"></i>
    </button>

    <button class="nav-button right">
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
