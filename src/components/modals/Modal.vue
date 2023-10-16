<script setup>
defineProps({
  shown: Boolean,
  size: {
    type: String,
    default: 'md',
    validator(value) {
      return ['sm', 'md', 'lg'].includes(value)
    }
  },
  theme: {
    type: String,
    default: 'light',
    validator(value) {
      return ['dark', 'light', 'transparent']
    }
  }
})

const emits = defineEmits(['onClose'])
</script>

<template>
  <teleport to="body">
    <div v-if="shown" class="modal-backdrop">
      <div class="modal-opac" @click.self="emits('onClose')"></div>
      <div class="modal">
        <div class="dialog" :class="[size, theme]">
          <button class="close-btn btn btn-trans-white-inline" @click="emits('onClose')">
            <i class="icon icon-close icon--s38"></i>
          </button>
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>
