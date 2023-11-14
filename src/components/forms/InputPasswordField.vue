<script setup>
import { ref } from 'vue'

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
  minWidth: {
    type: Number,
    validator(value) {
      return [436].includes(value)
    }
  }
})

const show = ref(false)
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
      :type="show ? 'text' : 'password'"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="eye-span" role="button" @click="() => (show = !show)">
      <i class="icon icon--s20" :class="show ? 'icon-visibility' : 'icon-visibility-off'"></i>
    </span>
  </div>
</template>
