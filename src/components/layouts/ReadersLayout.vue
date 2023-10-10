<template>
  <HeaderLayout
    @onLogoClick="
      () => {
        $router.push('/')
      }
    "
  />
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
