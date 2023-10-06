<template>
  <HeaderLayout>
    <template #slot-left>
      <div class="row-middle">
        <button class="btn">About Us</button>
      </div>
    </template>
    <template #slot-right>
      <div class="row-middle justify-end gap-x-[26px]">
        <button class="btn primary-inline md">Sign In</button>
        <button class="btn primary md">Sign Up</button>
      </div>
    </template>
  </HeaderLayout>

  <div class="container-flex mt-[60px]">
    <slot></slot>
  </div>

  <FooterLayout />
</template>

<script setup>
import HeaderLayout from './HeaderLayout.vue'
import FooterLayout from './FooterLayout.vue'
</script>

<style>
body {
  @apply bg-[#FFFCF3] overflow-x-hidden;
}
</style>
