<script setup>
defineProps({
  title: String
})

const emits = defineEmits(['onAsideClose'])
</script>

<template>
  <div class="aside-panel">
    <!-- header -->
    <div class="absolute top-0 inset-x-0 px-[15px] pt-[11px] pb-[12px] bg-neutrals-black">
      <div class="inner row-middle justify-between">
        <div class="text-body-2 font-bold text-neutrals-white">{{ title }}</div>
        <button class="btn btn-trans-white-inline" @click="emits('onAsideClose')">
          <i class="icon icon-close icon--s22"></i>
        </button>
      </div>
    </div>
  </div>
</template>
