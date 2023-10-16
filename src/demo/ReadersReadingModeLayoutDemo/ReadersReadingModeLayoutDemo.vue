<script setup>
import { ref } from 'vue'
import { ReadersReadingModeLayout } from '@components/layouts'
import AsidePanel from './AsidePanel.vue'
import CommentsSidePane from './CommentsSidePane.vue'
import SettingsSidePane from './SettingsSidePane.vue'
import ReadingPanel from './ReadingPanel.vue'

const asideShown = ref(false)

const onAsideShow = () => (asideShown.value = true)
const onAsideClose = () => (asideShown.value = false)
</script>

<template>
  <ReadersReadingModeLayout :asideShown="asideShown" @onBackClick="() => $router.go(-1)">
    <template #slot-header-title>
      <div class="body-2 text-[#fff]">
        <strong>The Glove</strong> | <strong>Chapter 3:</strong> A Twist of a Knife
      </div>
    </template>
    <template #slot-content-body>
      <ReadingPanel @onAsideShow="onAsideShow" @onAsideClose="onAsideClose" />
    </template>
    <template #slot-content-aside>
      <AsidePanel @onAsideClose="onAsideClose"> </AsidePanel>
    </template>
  </ReadersReadingModeLayout>
</template>
