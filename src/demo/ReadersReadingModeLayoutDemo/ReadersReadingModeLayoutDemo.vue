<script setup>
import { ReadersReadingModeLayout } from '@components/layouts'
import CommentsSidePane from './CommentsSidePane.vue'
import SettingsSidePane from './SettingsSidePane.vue'
import ReadingPannel from './ReadingPannel.vue'
</script>

<template>
  <ReadersReadingModeLayout @onBackClick="() => $router.go(-1)">
    <template #header-title>
      <div class="body-2 text-[#fff]">
        <strong>The Glove</strong> | <strong>Chapter 3:</strong> A Twist of a Knife
      </div>
    </template>
    <ReadingPannel />
    <CommentsSidePane />
    <SettingsSidePane />
  </ReadersReadingModeLayout>
</template>
