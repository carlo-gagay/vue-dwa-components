<script setup>
defineProps({
  data: {
    type: Array,
    default: []
  }
})

const emit = defineEmits(['onDataShow'])
</script>

<template>
  <v-dropdown class="dropdown" placement="bottom-start">
    <button class="select-button primary">
      <span>Genre</span>
      <i class="icon icon-cheveron-down icon--s24"></i>
    </button>
    <template #popper>
      <div class="dropdown-popper min-w-[221px]">
        <div class="body-1 font-bold">Genre</div>
        <div
          v-if="data.length > 0"
          v-for="(genre, index) in data"
          :key="index"
          class="dropdown-item"
        >
          <div class="row-middle justify-between w-full">
            <div class="row-middle gap-x-3">
              <i class="icon icon-box icon--s14"></i>
              <span class="body-2">Action</span>
            </div>
            <span class="body-2">123</span>
          </div>
        </div>
      </div>
    </template>
  </v-dropdown>
</template>
