<script setup>
import HeaderLayout from './HeaderLayout.vue'
import FooterLayout from './FooterLayout.vue'
import { IconLogo } from '@components/svgs'
</script>

<template>
  <HeaderLayout>
    <template #slot-brand>
      <button role="button" @click="() => $router.push('/')">
        <IconLogo />
      </button>
    </template>
    <template #slot-nav-links>
      <div class="row-middle">
        <button class="btn btn-primary-inline ml-[35px]" role="button">About Us</button>
      </div>
    </template>
    <template #slot-cta-buttons>
      <div class="row-middle justify-end gap-x-[26px]">
        <button
          class="btn btn-primary-inline md"
          role="button"
          @click="() => $router.push('/admin')"
        >
          Sign In
        </button>
        <button class="btn btn-primary md" role="button">Sign Up</button>
      </div>
    </template>
  </HeaderLayout>
  <div class="container-flex mt-[60px]">
    <slot></slot>
  </div>

  <FooterLayout />
</template>

<style>
body {
  @apply bg-beige overflow-x-hidden;
}
</style>
