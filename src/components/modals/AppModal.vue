<script setup>
defineProps({
  shown: Boolean
})

const emits = defineEmits(['onClose'])
</script>

<template>
  <teleport to="body">
    <div v-if="shown" class="modal-backdrop">
      <div class="modal-opac" @click.self="emits('onClose')"></div>
      <div class="modal">
        <div class="dialog">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>
