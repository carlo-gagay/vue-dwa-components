<script setup>
import HeaderLayout from './HeaderLayout.vue'

defineProps({
  asideShown: Boolean
})

const emits = defineEmits(['onBackClick'])
</script>

<template>
  <HeaderLayout>
    <div class="header-inner centered">
      <button class="absolute left-[42px]" @click="emits('onBackClick')">
        <i class="icon icon-arrow-left icon--s24 text-[#fff]"></i>
      </button>
      <div class="content">
        <slot name="slot-header-title"></slot>
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
