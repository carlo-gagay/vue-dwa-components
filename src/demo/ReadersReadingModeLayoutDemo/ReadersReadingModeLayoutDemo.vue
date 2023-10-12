<script setup>
import { ref } from 'vue'
import { ReadersReadingModeLayout } from '@components/layouts'
import CommentsSidePane from './CommentsSidePane.vue'
import SettingsSidePane from './SettingsSidePane.vue'
import ReadingPannel from './ReadingPannel.vue'

const asideShown = ref(false)

const onAsideToggle = () => (asideShown.value = !asideShown.value)
</script>

<template>
  <ReadersReadingModeLayout
    :asideShown="asideShown"
    @onAsideToggle="onAsideToggle"
    @onBackClick="() => $router.go(-1)"
  >
    <template #slot-header-title>
      <div class="body-2 text-[#fff]">
        <strong>The Glove</strong> | <strong>Chapter 3:</strong> A Twist of a Knife
      </div>
    </template>
    <template #slot-content-body>
      <ReadingPannel @onAsideToggle="onAsideToggle" />
    </template>
    <template #slot-content-aside>
      <CommentsSidePane />
    </template>
  </ReadersReadingModeLayout>
</template>
