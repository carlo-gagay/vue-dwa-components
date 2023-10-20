<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  label: String,
  size: String,
  container: String,
  selectButtonClass: String,
  popperClass: String,
  theme: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary'].includes(value)
    }
  }
})
</script>

<template>
  <div class="dropdown-container" :id="id">
    <v-dropdown v-bind="$attrs" class="dropdown" :container="container" :class="[size, theme]">
      <slot :label="label" :size="size" :theme="theme" :selectButtonClass="selectButtonClass">
        <button class="select-button" :class="[size, theme, selectButtonClass]" role="button">
          <span>{{ label ?? 'Select Options' }}</span>
          <i class="icon icon-cheveron-down icon--s24"></i>
        </button>
      </slot>
      <template #popper>
        <slot name="dropdown" :size="size" :theme="theme" :popperClass="popperClass" />
      </template>
    </v-dropdown>
  </div>
</template>
