<script setup>
import AnalyticsCardBase from './base/AnalyticsCardBase.vue'
import { setupItems } from '@/stores/sample'

defineProps({
  header: String
})
</script>

<template>
  <AnalyticsCardBase wrapperClasses="finish-setup" :header="header">
    <div class="progress-bars">
      <div v-for="(item, index) in setupItems" class="bar" :class="{ active: item.active }"></div>
    </div>
    <div class="setup-items">
      <div v-for="(item, index) in setupItems" class="setup-item" :class="{ active: item.active }">
        <div class="content">
          <i
            class="icon icon--s24"
            :class="item.active ? 'icon-check-circle' : 'icon-radio-button-unchecked'"
          ></i>
          <div class="text-sub-heading-2">{{ item.title }}</div>
        </div>
        <button class="action">
          <i class="icon icon-keyboard-arrow-right icon--s24"></i>
        </button>
      </div>
    </div>
  </AnalyticsCardBase>
</template>
