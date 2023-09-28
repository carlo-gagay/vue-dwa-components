<script setup>
import { TitleCard } from '@components/cards'
</script>

<template>
  <div class="p-8">
    <div class="grid grid-cols-4 gap-[20px]">
      <TitleCard
        v-for="n in 12"
        title="Title goes here"
        author="Author Here"
        published="Sept 20, 2023"
        description="This is description"
        :image="`https://picsum.photos/20${n}`"
        :key="n"
        :likes="1000"
      />
    </div>
  </div>
</template>
