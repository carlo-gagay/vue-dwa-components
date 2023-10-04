<template>
  <div class="dropdown-container" :id="container">
    <v-dropdown
      v-bind="$attrs"
      class="dropdown"
      :container="`#${container}`"
      :class="[size, theme]"
    >
      <slot>
        <button class="select-button">
          <span>{{ label ?? 'Select Options' }}</span>
          <i class="icon icon-arrow-drop-down icon--s24"></i>
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
  id: String,
  label: String,
  size: String,
  container: {
    type: String,
    default: 'body'
  },
  theme: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'primary'].includes(value)
    }
  }
})
</script>
