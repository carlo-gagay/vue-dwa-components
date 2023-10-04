<script setup>
import HeaderLayout from './HeaderLayout.vue'
import { IconAvatar, IconBell, IconBookMenu, IconCommunity, IconDashboard } from '@components/svgs'
</script>

<template>
  <HeaderLayout>
    <template #slot-right>
      <div class="flex justify-end gap-x-[26px] items-center">
        <button>
          <IconBell />
        </button>
        <button>
          <IconAvatar />
        </button>
      </div>
    </template>
  </HeaderLayout>

  <aside class="aside" aria-label="Sidebar">
    <div class="aside-inner">
      <ul>
        <li>
          <a href="#" class="aside-nav-link group" :class="{ active: true }">
            <IconDashboard />
            <span class="ml-[18px]">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" class="aside-nav-link group">
            <IconBookMenu />
            <span class="ml-[18px]">Comic Titles</span>
          </a>
        </li>
        <li>
          <a href="#" class="aside-nav-link group">
            <IconCommunity />
            <span class="ml-[18px]">Community</span>
          </a>
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
  @apply bg-[#F5F1E5];
}
</style>
