<script setup>
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
  minWidth: {
    type: Number,
    validator(value) {
      return [436].includes(value)
    }
  }
})
</script>

<template>
  <div class="form-group" :class="`min-w-${minWidth}`">
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
