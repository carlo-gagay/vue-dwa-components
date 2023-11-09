<script setup>
import { onMounted, onUnmounted } from 'vue'
import HeaderLayout from './HeaderLayout.vue'

defineProps({
  asideShown: Boolean
})

const emits = defineEmits(['onBackClick'])

onMounted(() => document.querySelector('body').classList.add('readersReadingModeLayout'))
onUnmounted(() => document.querySelector('body').classList.remove('readersReadingModeLayout'))
</script>

<template>
  <HeaderLayout>
    <div class="header-inner centered">
      <button class="absolute left-[42px]" @click="emits('onBackClick')">
        <i class="icon icon-arrow-back icon--s24 text-white"></i>
      </button>
      <div class="centered-single-content">
        <slot name="slot-content-header"></slot>
      </div>
    </div>
  </HeaderLayout>
  <div class="mt-[60px]">
    <section class="pane-body" :class="{ 'is-aside-shown': asideShown }">
      <div class="pane-body-inner">
        <slot name="slot-content-body"></slot>
      </div>
    </section>
    <aside class="pane-aside" :class="{ shown: asideShown }">
      <div class="pane-aside-inner">
        <slot name="slot-content-aside"></slot>
      </div>
    </aside>
  </div>
</template>
