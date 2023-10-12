<script setup>
import HeaderLayout from './HeaderLayout.vue'

const emits = defineEmits(['onBackClick'])
</script>

<template>
  <HeaderLayout>
    <div class="header-inner centered">
      <button class="absolute left-[42px]" @click="emits('onBackClick')">
        <i class="icon icon-arrow-left icon--s24 text-[#fff]"></i>
      </button>
      <div class="content">
        <slot name="header-title"></slot>
      </div>
    </div>
  </HeaderLayout>
  <div class="mt-[60px]">
    <slot></slot>
  </div>
</template>
