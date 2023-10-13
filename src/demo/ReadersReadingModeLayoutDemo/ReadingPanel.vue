<script setup>
import { ComicImage } from '@components/comicpage'

const emits = defineEmits(['onAsideShow'])
</script>

<template>
  <div class="container-flex reading-pannel border border-[#000]">
    <div class="visuals-section container-flexx">

      <div class="row-middle gap-x-0 px-[19%]">
        <ComicImage image="https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-IfhopNUO9l-full.jpg" alt="Page 01" />
        <ComicImage image="https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-IfhopNUO9l-full.jpg" alt="Page 02" />
      </div>
      
      <button class="bg-music-toggle">
        <i class="icon icon-music-notes icon--s20"></i>
      </button>

      <button class="nav-button left">
        <i class="icon icon-cheveron-left icon--s30"></i>
      </button>
      
      <button class="nav-button right">
        <i class="icon icon-cheveron-right icon--s30"></i>
      </button>
    </div>
    <div class="controls-section">
      <div class="inner">
        <div class="group controls-group">
          <button class="btn trans-white-inline">
            <i class="icon icon-menu icon--s24"></i>
          </button>
          <button class="btn trans-white-inline">
            <i class="icon icon-zoom-in icon--s24"></i>
          </button>
        </div>
        <div class="group controls-group">
          <button class="btn trans-white-inline">
            <i class="icon icon-cheveron-left icon--s24"></i>
          </button>
          <button class="btn trans-white-inline">
            <i class="icon icon-play-outline icon--s24"></i>
          </button>
          <button class="btn trans-white-inline">
            <i class="icon icon-cheveron-right icon--s24"></i>
          </button>
        </div>
        <div class="group controls-group">
          <button class="btn trans-white-inline" @click="emits('onAsideShow')">
            <i class="icon icon-chat-bubble-dots icon--s24"></i>
          </button>
          <button class="btn trans-white-inline" @click="emits('onAsideShow')">
            <i class="icon icon-tuning icon--s24"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
