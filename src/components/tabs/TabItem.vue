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
  type: {
    type: Number,
    default: 1,
    validator(value) {
      return [1, 2, 3, 4].includes(value)
    }
  },
  title: String
})

const emit = defineEmits(['onClick'])
</script>

<template>
  <button
    class="tab"
    role="button"
    :class="[{ selected: active }, size, `tab-type-${type}`]"
    @click="emit('onClick')"
  >
    <div class="tab-inner">
      {{ title }}
      <span v-if="badgeContent" class="badge"> {{ badgeContent }} </span>
    </div>
  </button>
</template>
