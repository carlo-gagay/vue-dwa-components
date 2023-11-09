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
  breakpoints: Object,
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
  sliderClasses: String,
  spacing: {
    type: Number,
    default: 0
  },
  sliderStyles: Object
})

const [container, slider] = useKeenSlider({
  breakpoints: props.breakpoints,
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
  slideChanged: (instance) => updateTracker(instance)
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

  navigator.value.index = details.rel
  navigator.value.length = details.slides.length
}
</script>

<template>
  <div class="keen-slider-container">
    <div ref="container" class="keen-slider" :class="sliderClasses" :style="sliderStyles">
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
