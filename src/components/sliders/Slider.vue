<script setup>
import { ref } from 'vue'
import { useKeenSlider } from 'keen-slider/vue'

const props = defineProps({
  animation: {
    type: String,
    default: 'default',
    validator: (value) => {
      return ['default', 'stack-sliding'].includes(value)
    }
  },
  class: String,
  drag: {
    type: Boolean,
    default: false
  },
  loop: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: 'snap'
  },
  origin: {
    type: String,
    default: 'auto'
  },
  perView: {
    type: Number,
    default: 1
  },
  range: Object,
  spacing: {
    type: Number,
    default: 0
  },
  style: Object
})

const [container, slider] = useKeenSlider({
  drag: props.drag,
  loop: props.loop,
  mode: props.mode,
  slides: {
    origin: props.origin,
    perView: props.perView,
    spacing: props.spacing
  },
  range: props.range,
  created: (instance) => updateTracker(instance),
  slideChanged: (instance) => updateTracker(instance),
  detailsChanged: (instance) => onDetailsChanged(instance)
})

const navigator = ref({
  index: 0,
  length: 0,
  prev: () => slider.value.prev(),
  next: () => slider.value.next(),
  moveToIdx: (index) => slider.value.moveToIdx(index)
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
    <div ref="container" class="keen-slider" :class="props.class" :style="props.style">
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
