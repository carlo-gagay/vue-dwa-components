<script setup>
import { ref, watch } from 'vue'
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
  data: {
    type: [Array],
    required: true
  },
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
  sliderItemClasses: String,
  spacing: {
    type: Number,
    default: 0
  },
  sliderStyles: Object
})

const emit = defineEmits(['onDetailsChanged'])

const options = ref({
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
  slideChanged: (instance) => updateTracker(instance),
  detailsChanged: (instance) => emit('onDetailsChanged', instance)
})

const [container, slider] = useKeenSlider(options.value)

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

watch(
  () => props.drag,
  (newVal) => {
    options.value.drag = newVal
    slider.value.update(options.value)
  }
)
</script>

<template>
  <div class="keen-slider-container">
    <div ref="container" class="keen-slider" :class="sliderClasses" :style="sliderStyles">
      <div
        v-for="(item, index) in data"
        class="keen-slider__slide"
        :class="sliderItemClasses"
        :key="index"
      >
        <slot
          :animation-style="animationStyle"
          :index="index"
          :item="item"
          :navigator="navigator"
        />
      </div>
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
