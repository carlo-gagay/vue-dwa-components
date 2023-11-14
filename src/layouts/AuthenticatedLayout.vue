<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import HeaderLayout from './HeaderLayout.vue'
import { IconAvatar, IconLogo } from '@components/svgs'

const showMobileNavs = ref(false)

onMounted(() => document.querySelector('body').classList.add('authenticatedLayout'))
onUnmounted(() => document.querySelector('body').classList.remove('authenticatedLayout'))
</script>

<template>
  <HeaderLayout
    header-classes="paneled"
    nav-alignment="end"
    :show-mobile-navs="showMobileNavs"
    @on-logo-click="() => $router.push('/')"
    @on-show-mobile-navs="() => (showMobileNavs = !showMobileNavs)"
  >
    <template #slot-brand>
      <button class="logo" role="button" @click="() => $router.push('/')">
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

  <aside class="aside" aria-label="Sidebar" :class="{ show: showMobileNavs }">
    <div class="aside-inner">
      <button class="mobile-close-button" @click="() => (showMobileNavs = false)">
        <i class="icon icon-close icon--s32"></i>
      </button>
      <div class="mobile-view-logo">
        <button class="logo-mobile" role="button" @click="() => $router.push('/')">
          <IconLogo class="icon text-yellow" />
        </button>
      </div>
      <ul>
        <li>
          <button
            class="aside-nav-link group"
            :class="{ active: $route.path == '/dashboard' }"
            @click="() => $router.push('/dashboard')"
          >
            <i class="icon icon-dashboard icon--s20" />
            <span class="text-body-1">Dashboard</span>
          </button>
        </li>
        <li>
          <button
            class="aside-nav-link group"
            :class="{ active: $route.path == '/titles' }"
            @click="() => $router.push('/titles')"
          >
            <i class="icon icon-menu-book icon--s20" />
            <span class="text-body-1">Comic Titles</span>
          </button>
        </li>
        <li>
          <button class="aside-nav-link group">
            <i class="icon icon-groups icon--s20" />
            <span class="text-body-1">Community</span>
          </button>
        </li>
        <li>
          <button class="aside-nav-link group">
            <i class="icon icon-monetization icon--s20" />
            <span class="text-body-1">Subscribers</span>
          </button>
        </li>
        <li>
          <button class="aside-nav-link group">
            <i class="icon icon-analytics icon--s20" />
            <span class="text-body-1">Analytics</span>
          </button>
        </li>
      </ul>
    </div>
  </aside>

  <div class="aside-body">
    <div v-show="showMobileNavs" class="opac" @click="() => (showMobileNavs = false)"></div>
    <div class="aside-body-inner">
      <slot></slot>
    </div>
  </div>
</template>
