<template>
  <div class="dropdown-container" :id="id">
    <v-dropdown v-bind="$attrs" class="dropdown" :container="container" :class="[size, theme]">
      <slot>
        <button class="select-button" :class="[size, theme]">
          <span>{{ label ?? 'Select Options' }}</span>
          <i class="icon icon-cheveron-down icon--s24"></i>
        </button>
      </slot>
      <template #popper>
        <slot name="dropdown" :size="size" :theme="theme" />
      </template>
    </v-dropdown>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  label: String,
  size: String,
  container: String,
  theme: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary'].includes(value)
    }
  }
})
</script>
