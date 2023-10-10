<script setup>
import HeaderLayout from './HeaderLayout.vue'
</script>

<template>
  <HeaderLayout
    class="absolute"
    @onLogoClick="
      () => {
        $router.push('/')
      }
    "
  />
  <div class="container-flex mt-[60px]">
    <slot></slot>
  </div>
</template>
