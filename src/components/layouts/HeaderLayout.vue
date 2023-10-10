<script setup>
import { IconLogo } from '@components/svgs'

const emit = defineEmits(['onLogoClick'])
</script>

<template>
  <header aria-label="Header" class="header" :class="$attrs.class">
    <div class="header-inner">
      <div class="row-middle">
        <button role="button" @click="emit('onLogoClick')">
          <IconLogo />
        </button>
        <div class="row-middle">
          <button class="btn" role="button">About Us</button>
        </div>
      </div>
      <div class="row-middle justify-end gap-x-[26px]">
        <button class="btn primary-inline md" role="button">Sign In</button>
        <button class="btn primary md" role="button">Sign Up</button>
      </div>
    </div>
  </header>
</template>
