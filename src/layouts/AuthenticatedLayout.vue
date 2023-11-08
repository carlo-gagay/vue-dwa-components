<script setup>
import HeaderLayout from './HeaderLayout.vue'
import { IconAvatar, IconLogo } from '@components/svgs'
</script>

<template>
  <HeaderLayout>
    <template #slot-brand>
      <button role="button" @click="() => $router.push('/')">
        <IconLogo />
      </button>
    </template>
    <template #slot-cta-buttons>
      <div class="flex justify-end gap-x-[26px] items-center">
        <button role="button">
          <i class="icon icon-notifications icon--s24 text-yellow"></i>
        </button>
        <button role="button">
          <IconAvatar class="icon text-yellow" />
        </button>
      </div>
    </template>
  </HeaderLayout>

  <aside class="aside" aria-label="Sidebar">
    <div class="aside-inner">
      <ul>
        <li>
          <button
            class="aside-nav-link group"
            :class="{ active: $route.path == '/dashboard' }"
            @click="() => $router.push('/dashboard')"
          >
            <i class="icon icon-dashboard icon--s20" />
            <span class="ml-[18px]">Dashboard</span>
          </button>
        </li>
        <li>
          <button
            class="aside-nav-link group"
            :class="{ active: $route.path == '/titles' }"
            @click="() => $router.push('/titles')"
          >
            <i class="icon icon-menu-book icon--s20" />
            <span class="ml-[18px]">Comic Titles</span>
          </button>
        </li>
        <li>
          <button class="aside-nav-link group">
            <i class="icon icon-groups icon--s20" />
            <span class="ml-[18px]">Community</span>
          </button>
        </li>
        <li>
          <button class="aside-nav-link group">
            <i class="icon icon-monetization icon--s20" />
            <span class="ml-[18px]">Subscribers</span>
          </button>
        </li>
        <li>
          <button class="aside-nav-link group">
            <i class="icon icon-analytics icon--s20" />
            <span class="ml-[18px]">Analytics</span>
          </button>
        </li>
      </ul>
    </div>
  </aside>

  <div class="aside-body">
    <div class="aside-body-inner">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
body {
  @apply bg-[#F5F1E5] #{!important};
}
</style>
