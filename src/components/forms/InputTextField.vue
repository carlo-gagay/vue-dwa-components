<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: String,
  label: String,
  modelValue: String,
  name: String,
  placeholder: String,
  required: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text',
    validator(value) {
      return ['text', 'email', 'url'].includes(value)
    }
  },
  width: Number
})

const groupWidth = computed(() => {
  return props.width ? props.width.toString().concat('px') : 'auto'
})
</script>

<template>
  <div class="form-group" :style="{ 'min-width': groupWidth }">
    <label :for="id" class="form-label" :class="{ required: required }">{{ label }}</label>
    <input
      v-bind="$attrs"
      class="form-control"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.evalue)"
    />
  </div>
</template>
