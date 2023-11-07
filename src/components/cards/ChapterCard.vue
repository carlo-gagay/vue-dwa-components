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
        <div v-if="published" class="stat-item stat-item-sm">
          <IconBookMenu class="w-[18px] h-[18px] dark:text-neutral-white" />
          <span>{{ published }}</span>
        </div>
        <div v-if="pages" class="stat-item stat-item-sm">
          <IconBookMenu class="w-[18px] h-[18px] dark:text-neutral-white" />
          <span>{{ pages }}</span>
        </div>
        <div v-if="comments" class="stat-item stat-item-sm">
          <IconBookMenu class="w-[18px] h-[18px] dark:text-neutral-white" />
          <span>{{ comments }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
