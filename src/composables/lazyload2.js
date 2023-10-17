export default function lazyloadComposable() {
  const lazyload = (imageContainer) => {
    const loadImage = () => {
      const imageElement = Array.from(imageContainer.children).find((child) => {
        return child.nodeName === 'IMG'
      })

      imageElement.addEventListener('error', () => console.log('error'))
      imageElement.style.backgroundImage = `url(${imageElement.dataset.url})`
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
  }

  return {
    lazyload
  }
}
