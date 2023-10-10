<script setup>
import { IconLogo } from '@components/svgs'

const emit = defineEmits(['onLogoClick'])
</script>

<template>
  <header aria-label="Header" class="header">
    <div class="header-inner">
      <div class="row-middle">
        <button role="button" @click="emit('onLogoClick')">
          <IconLogo />
        </button>
        <slot name="slot-left"></slot>
      </div>
      <slot name="slot-right"></slot>
    </div>
  </header>
</template>
