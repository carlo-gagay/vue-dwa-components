<script setup>
defineProps({
  size: String
})
</script>

<template>
  <div id="app-tab" :class="size">
    <slot />
  </div>
</template>
