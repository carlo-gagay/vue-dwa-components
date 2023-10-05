<script setup>
import { defineAsyncComponent } from 'vue'
const ReadersLayoutDemo = defineAsyncComponent(() => import('./demo/ReadersLayoutDemo.vue'))
</script>

<template>
  <ReadersLayoutDemo />
</template>
