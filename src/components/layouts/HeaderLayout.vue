<script setup>
import { IconLogo } from '@components/svgs'
</script>

<template>
  <header aria-label="Header" class="header">
    <div class="header-inner">
      <div class="row-middle">
        <a href="#">
          <IconLogo />
        </a>
        <slot name="slot-left"></slot>
      </div>
      <slot name="slot-right"></slot>
    </div>
  </header>
</template>
