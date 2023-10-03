<script setup>
import {
  IconAvatar,
  IconBell,
  IconBookMenu,
  IconCommunity,
  IconDashboard,
  IconLogo,
  IconMenu
} from '@components/svg'
</script>

<template>
  <header aria-label="Header" class="fixed top-0 inset-x-0 h-[60px] w-full z-40">
    <div
      class="w-full h-full bg-[#0C0B0B] flex justify-between py-[15px] px-4 sm:px-10 items-center"
    >
      <div>
        <a href="#">
          <IconLogo />
        </a>
      </div>
      <div class="flex justify-end gap-x-[26px] items-center">
        <button>
          <IconBell />
        </button>
        <button>
          <IconAvatar />
        </button>
      </div>
    </div>
  </header>

  <aside
    class="fixed bottom-0 left-0 z-40 w-[238px] h-[calc(100vh-60px)] transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="relative h-full py-[51px] pl-[40px] pr-[23px] overflow-y-auto bg-[#0C0B0B]">
      <ul class="space-y-2 font-medium">
        <li>
          <a
            href="#"
            class="flex items-center py-2 px-[21px] rounded-[6px] text-[#BDB9B4] group text-sm font-bold"
            :class="{ active: true }"
          >
            <IconDashboard />
            <span class="ml-[18px]">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center py-2 px-[21px] rounded-[6px] text-[#BDB9B4] group text-sm font-bold"
          >
            <IconBookMenu />
            <span class="ml-[18px]">Comic Titles</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center py-2 px-[21px] rounded-[6px] text-[#BDB9B4] group text-sm font-bold"
          >
            <IconCommunity />
            <span class="ml-[18px]">Community</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <div class="p-4 sm:ml-[238px] mt-[60px]">
    <div class="w-full h-full pt-[29px] pb-[27px] sm:px-5">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
body {
  @apply bg-[#F5F1E5];
}

.active {
  @apply bg-[#FFC94B] text-black;
}
</style>
