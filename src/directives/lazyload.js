import lazyloadComposable from '../composables/lazyload'

export default {
    mounted: el => {

        const {lazyload} = lazyloadComposable()

        lazyload(el, '/images/placeholder.png')
    }
}
