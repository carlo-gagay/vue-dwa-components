<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.body.classList.add('dark')
})

onUnmounted(() => {
  document.body.classList.remove('dark')
})

const emits = defineEmits(['onBack'])
</script>

<template>
  <div class="readers-full-content-layout content-full">
    <button class="back-button" @click="emits('onBack')">
      <i class="icon icon-arrow-back-ios icon--s32"></i>
    </button>
    <slot></slot>
  </div>
</template>
