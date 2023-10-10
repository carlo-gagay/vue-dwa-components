<template>
  <HeaderLayout
    class="absolute"
    @onLogoClick="
      () => {
        $router.push('/')
      }
    "
  >
    <template #slot-left>
      <div class="row-middle">
        <button class="btn" role="button">About Us</button>
      </div>
    </template>
    <template #slot-right>
      <div class="row-middle justify-end gap-x-[26px]">
        <button class="btn primary-inline md" role="button">Sign In</button>
        <button class="btn primary md" role="button">Sign Up</button>
      </div>
    </template>
  </HeaderLayout>

  <div class="container-flex mt-[60px]">
    <slot></slot>
  </div>
</template>

<script setup>
import HeaderLayout from './HeaderLayout.vue'
</script>
