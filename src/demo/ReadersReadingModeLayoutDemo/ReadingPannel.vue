<script setup>
const emits = defineEmits(['onAsideToggle'])
</script>

<template>
  <div class="container-flex reading-pannel">
    <div class="visuals-section container-flexx">
      <div class="h-[500px]"></div>
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
          <button class="btn trans-white-inline" @click="emits('onAsideToggle')">
            <i class="icon icon-chat-bubble-dots icon--s24"></i>
          </button>
          <button class="btn trans-white-inline" @click="emits('onAsideToggle')">
            <i class="icon icon-tuning icon--s24"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
