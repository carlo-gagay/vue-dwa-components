<script setup>
import { ref } from 'vue'
import { useKeenSlider } from 'keen-slider/vue'

const props = defineProps({
  loop: {
    type: Boolean,
    default: false
  },
  drag: {
    type: Boolean,
    default: false
  },
  class: String,
  animation: {
    type: String,
    default: 'default',
    validator: (value) => {
      return ['default', 'stack-sliding'].includes(value)
    }
  }
})

const [container, slider] = useKeenSlider({
  drag: props.drag,
  loop: props.loop,
  created: (instance) => updateTracker(instance),
  slideChanged: (instance) => updateTracker(instance),
  detailsChanged: (instance) => onDetailsChanged(instance)
})

const navigator = ref({
  index: 0,
  length: 0,
  prev: () => slider.value.prev(),
  next: () => slider.value.next()
})

const animationStyle = ref({})

const updateTracker = (instance) => {
  const details = instance.track.details
  // Navigator's properties
  navigator.value.index = details.rel
  navigator.value.length = details.slides.length
}

const onDetailsChanged = (instance) => {
  if (props.animation === 'stack-sliding') {
    stackSlidingAnimation(instance)
  }
}

// Animation Handlers
const stackSlidingAnimation = (instance) => {}
</script>

<template>
  <div class="keen-slider-container">
    <div ref="container" class="keen-slider" :class="class">
      <slot :animation-style="animationStyle" :navigator="navigator" />
    </div>
    <div class="keen-slider-nav-container">
      <slot name="navigator" :navigator="navigator" />
    </div>
  </div>
</template>

<style lang="scss">
@import url('keen-slider/keen-slider.css');

.keen-slider-nav-container {
  @apply relative inset-0;
}
</style>
