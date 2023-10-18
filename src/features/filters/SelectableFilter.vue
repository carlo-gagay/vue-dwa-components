<script setup>
defineProps({
  data: {
    type: Array,
    default: []
  },
  label: String,
  dropdownTitle: String
})

const emits = defineEmits(['onShow', 'onSelect'])
</script>

<template>
  <v-dropdown class="dropdown" placement="bottom-start">
    <button class="select-button primary w-full sm:w-fit" @click="emits('onShow')">
      <span>{{ label }}</span>
      <i class="icon icon-cheveron-down icon--s24"></i>
    </button>
    <template #popper>
      <div class="dropdown-popper min-w-[221px]">
        <div class="text-body-1 font-bold">{{ dropdownTitle }}</div>
        <div
          v-if="data.length > 0"
          v-for="(item, index) in data"
          :key="index"
          class="dropdown-item"
          @click="emits('onSelect')"
        >
          <slot :item="item" :index="index"></slot>
        </div>
      </div>
    </template>
  </v-dropdown>
</template>
