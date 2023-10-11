<template>
  <HeaderLayout
    @onLogoClick="
      () => {
        $router.push('/')
      }
    "
  >
    <template #slot-nav-links>
      <div class="row-middle">
        <button class="btn primary-inline ml-[35px]" role="button">About Us</button>
      </div>
    </template>
    <template #slot-cta-buttons>
      <div class="row-middle justify-end gap-x-[26px]">
        <button class="btn primary-inline md" role="button">Sign In</button>
        <button class="btn primary md" role="button">Sign Up</button>
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
