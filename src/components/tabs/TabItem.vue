<script setup>
defineProps({
  active: Boolean,
  badgeContent: [Number, String],
  size: {
    type: String,
    validator(value) {
      return ['md', 'lg'].includes(value)
    }
  },
  title: String
})

const emit = defineEmits(['onClick'])
</script>

<template>
  <button
    class="tab tab-type-1"
    :class="[{ selected: active }, size]"
    role="button"
    @click="emit('onClick')"
  >
    <div class="tab-inner">
      {{ title }}
      <span v-if="badgeContent" class="badge"> {{ badgeContent }} </span>
    </div>
  </button>
</template>
