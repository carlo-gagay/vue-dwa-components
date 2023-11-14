<script setup>
import { IconLogo } from '@components/svgs'

defineProps({
  headerClasses: String,
  navAlignment: {
    type: String,
    default: 'between',
    validator(value) {
      return ['between', 'center', 'end', 'start'].includes(value)
    }
  },
  showMobileNavs: {
    type: Boolean,
    default: false
  }
})

defineEmits(['onLogoClick', 'onShowMobileNavs'])
</script>

<template>
  <header aria-label="Header" class="header" :class="headerClasses">
    <slot>
      <div class="header-inner">
        <div class="nav-brand">
          <slot name="slot-brand">
            <button class="logo" role="button" @click="() => $emit('onLogoClick')">
              <IconLogo />
            </button>
          </slot>
          <div class="mobile-menu-toggler">
            <button class="text-beige" @click="() => $emit('onShowMobileNavs')">
              <i class="icon icon--s32" :class="showMobileNavs ? 'icon-close' : 'icon-menu'"></i>
            </button>
          </div>
        </div>
        <div class="main-nav-wrap" :class="[{ show: showMobileNavs }, navAlignment]">
          <slot name="slot-nav-links"></slot>
          <slot name="slot-cta-buttons"></slot>
        </div>
      </div>
    </slot>
  </header>
</template>
