import lazyloadComposable from '../composables/lazyload2'

export default {
  mounted: (el) => {
    const { lazyload } = lazyloadComposable()

    lazyload(el)
  }
}
