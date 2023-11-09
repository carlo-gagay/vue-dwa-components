<script setup>
import { ref } from 'vue'

const showMobileNavs = ref(false)
</script>

<template>
  <header aria-label="Header" class="header">
    <slot>
      <div class="header-inner">
        <div class="nav-brand">
          <slot name="slot-brand"></slot>
          <div class="mobile-menu-toggler">
            <button class="text-beige" @click="() => (showMobileNavs = !showMobileNavs)">
              <i class="icon icon--s32" :class="showMobileNavs ? 'icon-close' : 'icon-menu'"></i>
            </button>
          </div>
        </div>
        <div class="main-nav-wrap" :class="{ show: showMobileNavs }">
          <slot name="slot-nav-links"></slot>
          <slot name="slot-cta-buttons"></slot>
        </div>
      </div>
    </slot>
  </header>
</template>
