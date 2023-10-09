import lazyloadComposable from '../composables/lazyload'

export default {
  mounted: (el) => {
    const { lazyload } = lazyloadComposable()

    Promise.resolve(lazyload(el))
  }
}
