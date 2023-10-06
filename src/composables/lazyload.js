export default function lazyloadComposable() {
  const lazyload = (imageContainer, defaultImage) => {
    const loadImage = () => {
      const imageElement = Array.from(imageContainer.children).find((imageContainer) => {
        return imageContainer.nodeName === 'IMG'
      })

      const size = window.innerWidth > 768 ? 'lg' : 'sm'
      transformImage(size)

      if (imageElement.dataset.urlSm) {
        window.addEventListener('resize', resizeEvent)
      }
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
          observer.unobserve(imageContainer)
        }
      })
    }

    const createObserver = () => {
      const options = {
        root: null,
        threshold: '0'
      }
      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(imageContainer)
    }

    if (window['IntersectionObserver']) {
      createObserver()
    } else {
      loadImage()
    }

    // Tracks size changes
    let lastChanged = 0

    const LANDSCAPE = 1024
    const PORTRAIT = 768

    const isIncreasing = () => lastChanged < window.innerWidth
    const isDecreasing = () => lastChanged > window.innerWidth

    const transformImage = (size = 'lg') => {
      const imageElement = Array.from(imageContainer.children).find(
        (imageContainer) => imageContainer.nodeName === 'IMG'
      )

      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => imageContainer.classList.add('loaded'), 100)
        })

        imageElement.addEventListener('error', () => console.log('error'))

        const getImage = () => {
          // If no image for small screens but has for large screens
          if (!imageElement.dataset.urlSm) size = 'lg'

          switch (size) {
            case 'sm':
              return imageElement.dataset.urlSm
            case 'lg':
              return imageElement.dataset.url
            default:
              return imageElement.dataset.url
          }
        }

        const img = getImage() ? getImage() : defaultImage
        imageElement.style.backgroundImage = `url(${img})`
      }
    }

    const resizeEvent = (e) => {
      if (lastChanged === 0) {
        lastChanged = window.innerWidth
      }

      if (isIncreasing() && window.innerWidth > PORTRAIT && lastChanged < LANDSCAPE) {
        lastChanged = LANDSCAPE
        transformImage('lg')
      }

      if (isDecreasing() && window.innerWidth < PORTRAIT && lastChanged > PORTRAIT) {
        lastChanged = PORTRAIT
        transformImage('sm')
      }
    }
  }

  return {
    lazyload
  }
}
