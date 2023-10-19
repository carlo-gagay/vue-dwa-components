<script setup>
defineProps({
  formGroupClass: String,
  formInputClass: String,
  hasPostfixIcon: Boolean,
  hasPrefixIcon: Boolean,
  id: String,
  label: String,
  name: String,
  modelValue: {
    type: String,
    require: true
  },
  placeholder: String,
  required: Boolean,
  type: {
    type: String,
    default: 'text',
    validator(value) {
      return ['text', 'email', 'password'].includes(value)
    }
  }
})
</script>

<template>
  <div class="form-group" :class="formGroupClass">
    <label class="label" :for="id"
      >{{ label }} <span v-if="required" class="required">*</span></label
    >
    <div class="form-input" :class="formInputClass">
      <slot v-if="hasPrefixIcon" name="prefix-icon"></slot>
      <input
        v-bind="$attrs"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      />
      <slot v-if="hasPostfixIcon" name="postfix-icon"></slot>
    </div>
  </div>
</template>
