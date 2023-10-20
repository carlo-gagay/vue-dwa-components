<script setup>
import HeaderLayout from './HeaderLayout.vue'
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
          class="btn btn-primary-inline btn-md"
          role="button"
          @click="() => $router.push('/admin')"
        >
          Sign In
        </button>
        <button class="btn btn-primary btn-md" role="button">Sign Up</button>
      </div>
    </template>
  </HeaderLayout>
  <div class="container-flex mt-[60px]">
    <slot></slot>
  </div>
</template>
