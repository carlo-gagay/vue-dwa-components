<script setup>
defineProps({
  active: Boolean,
  badgeContent: [Number, String],
  title: String
})

const emit = defineEmits(['onClick'])
</script>

<template>
  <button class="tab" role="button" :class="{ selected: active }" @click="emit('onClick')">
    <div class="tab-inner">
      {{ title }}
      <span v-if="badgeContent" class="badge"> {{ badgeContent }} </span>
    </div>
  </button>
</template>
