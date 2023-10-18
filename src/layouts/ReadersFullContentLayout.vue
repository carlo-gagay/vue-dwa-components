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
  <div class="content-full py-[121px] px-4 sm:px-[185px] dark:bg-[#1A1A1A]">
    <button
      class="back-button absolute top-[121px] left-[98px] btn btn-trans-black-inline"
      @click="emits('onBack')"
    >
      <i class="icon icon-cheveron-left icon--s32"></i>
    </button>
    <slot></slot>
  </div>
</template>
