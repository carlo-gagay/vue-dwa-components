<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import HeaderLayout from './HeaderLayout.vue'

const showMobileNavs = ref(false)

onMounted(() => document.querySelector('body').classList.add('readersDescriptionLayout'))
onUnmounted(() => document.querySelector('body').classList.remove('readersDescriptionLayout'))
</script>

<template>
  <HeaderLayout
    :show-mobile-navs="showMobileNavs"
    @on-logo-click="() => $router.push('/')"
    @on-show-mobile-navs="() => (showMobileNavs = !showMobileNavs)"
  >
    <template #slot-nav-links>
      <div class="row-middle">
        <button class="tab tab-type-3" role="button">About Us</button>
      </div>
    </template>
    <template #slot-cta-buttons>
      <div class="header-cta">
        <button
          class="btn btn-secondary btn-md"
          role="button"
          @click="() => $router.push('/dashboard')"
        >
          Sign In
        </button>
        <button
          class="btn btn-primary btn-md"
          role="button"
          @click="() => $router.push('/dashboard')"
        >
          Sign Up
        </button>
      </div>
    </template>
  </HeaderLayout>
  <div class="container-flex mt-[60px]">
    <slot></slot>
  </div>
</template>
