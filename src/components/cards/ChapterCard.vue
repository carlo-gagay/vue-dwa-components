<script setup>
import { IconBookMenu } from '@components/svgs'

defineProps({
  alt: String,
  comments: [Number, String],
  image: String,
  pages: String,
  published: String,
  subtitle: String,
  title: String
})

const emits = defineEmits(['onClick'])
</script>

<template>
  <div class="chapter-card">
    <div class="chapter-card-image" @click="emits('onClick')">
      <figure v-lazyload class="full-image">
        <img src="/images/placeholder.png" :data-url="image" :alt="alt" />
      </figure>
    </div>
    <div class="chapter-card-info">
      <div class="text-sub-heading-1">{{ title }}</div>
      <div class="text-small-text">{{ subtitle }}</div>

      <div class="statistics row-middle">
        <div v-if="published" class="group row-end">
          <IconBookMenu class="w-[18px] h-[18px] dark:text-neutrals-white" />
          <div class="texts">{{ published }}</div>
        </div>
        <div v-if="pages" class="group row-end">
          <IconBookMenu class="w-[18px] h-[18px] dark:text-neutrals-white" />
          <div class="texts">{{ pages }}</div>
        </div>
        <div v-if="comments" class="group row-end">
          <IconBookMenu class="w-[18px] h-[18px] dark:text-neutrals-white" />
          <div class="texts">{{ comments }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
