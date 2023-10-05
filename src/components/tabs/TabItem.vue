<template>
  <div class="tab-item" :class="{ active: active }">
    <a href="#"> {{ title }} </a>
    <span v-if="badgeContent" class="badge"> {{ badgeContent }} </span>
  </div>
</template>

<script setup>
defineProps({
  active: Boolean,
  badgeContent: [Number, String],
  title: String
})
</script>
