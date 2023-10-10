<template>
  <button class="tab-item" :class="{ active: active }" role="button" @click="emit('onClick')">
    <div class="tab-item-title">{{ title }}</div>
    <span v-if="badgeContent" class="badge"> {{ badgeContent }} </span>
  </button>
</template>

<script setup>
defineProps({
  active: Boolean,
  badgeContent: [Number, String],
  title: String
})

const emit = defineEmits(['onClick'])
</script>
