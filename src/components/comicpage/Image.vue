<script setup>
defineProps({
    alt: String,
    image: String
})
</script>

<template>
    <div class="relative">
        <img :src="image" :alt="alt" />
    </div>
</template>