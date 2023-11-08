<script setup>
import { computed, ref } from 'vue'

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
  width: Number
})

const groupWidth = computed(() => {
  return props.width ? props.width.toString().concat('px') : 'auto'
})

const show = ref(false)
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
      :type="show ? 'text' : 'password'"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.evalue)"
    />
    <span class="eye-span" role="button" @click="() => (show = !show)">
      <i class="icon icon-remove-red-eye icon--s20"></i>
    </span>
  </div>
</template>
