import gsap from 'gsap'

export const removeLoader = () => {
  gsap.set('#loader', {
    display: 'none',
  })
}

export const animateLoader = () => {
  gsap.to('#content img', {
    opacity: 0,
    duration: 0.4,
    delay: 1.6,
  })

  gsap.to('#content span', {
    opacity: 0,
    y: 10,
    duration: 0.4,
    delay: 1.6,
  })
}
