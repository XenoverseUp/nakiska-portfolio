import gsap, { Sine, Power3, Power2, Power1, Power4, Expo, Circ } from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

export const setup = () => {
  gsap.set(['.star', '.bubble'], {
    xPercent: -50,
    yPercent: -50,
    opacity: 1,
  })

  gsap.set('#star-0', { '--size': '51vw' })
  gsap.set('#star-1', { '--size': '53vw' })
  gsap.set('#star-2', { '--size': '53vw' })
  gsap.set('#star-3', { '--size': '53vw' })
  gsap.set('#star-4', { '--size': '66vw' })
  gsap.set('#star-5', { '--size': '53vw' })
  gsap.set('#star-6', { '--size': '73vw' })
  gsap.set('#star-7', { '--size': '74vw' })
  gsap.set('#star-8', { '--size': '66vw' })
  gsap.set('#star-9', { '--size': '66vw' })

  gsap.set('#bubble-0', { '--size': '40vw' })
  gsap.set('#bubble-1', { '--size': '51vw' })
  gsap.set('#bubble-2', { '--size': '46vw' })
  gsap.set('#bubble-3', { '--size': '46vw' })
}

export const animate = () => {
  animateStars()
  animateBubbles()
}

const animateStars = () => {
  gsap
    .timeline()
    .to('#star-0', {
      delay: 1,
      duration: 3.5 - 0.5,
      motionPath: {
        path: '#star-path-0',
        align: '#star-path-0',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.7,
      immediateRender: true,
      ease: Power4.easeOut,
    })
    .set('#star-0', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#star-1', {
      delay: 1,
      duration: 5 - 0.5,
      motionPath: {
        path: '#star-path-1',
        align: '#star-path-1',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      keyframes: {
        scale: [1, 0.8, 0.5, 0.2, 0.15],
      },
      immediateRender: true,
      ease: Power4.easeOut,
    })
    .set('#star-1', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#star-2', {
      delay: 1,
      duration: 5 - 0.5,
      motionPath: {
        path: '#star-path-2',
        align: '#star-path-2',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.15,
      immediateRender: true,
      ease: Power4.easeOut,
    })
    .set('#star-2', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#star-3', {
      delay: 1,
      duration: 5.5 - 0.5,
      motionPath: {
        path: '#star-path-3',
        align: '#star-path-3',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      keyframes: {
        scale: [1, 1, 0.8, 0.5, 0.3, 0.1],
      },
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .set('#star-3', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#star-4', {
      delay: 1,
      duration: 5 - 0.5,
      motionPath: {
        path: '#star-path-4',
        align: '#star-path-4',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      keyframes: {
        scale: [1, 1, 0.8, 0.5, 0.3, 0.1],
      },
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .set('#star-4', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#star-5', {
      delay: 1,
      duration: 5.5 - 0.5,
      motionPath: {
        path: '#star-path-5',
        align: '#star-path-5',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      keyframes: {
        scale: [1, 0.5, 0.3, 0.1],
      },
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .set('#star-5', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#star-6', {
      delay: 1,
      duration: 4 - 0.5,
      motionPath: {
        path: '#star-path-6',
        align: '#star-path-6',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: 0,
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .set('#star-6', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#star-7', {
      delay: 1,
      duration: 4.5 - 0.5,
      motionPath: {
        path: '#star-path-7',
        align: '#star-path-7',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: 0,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .set('#star-7', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#star-8', {
      delay: 1,
      duration: 4.5 - 0.5,
      motionPath: {
        path: '#star-path-8',
        align: '#star-path-8',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: 0,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .set('#star-8', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#star-9', {
      delay: 1,
      duration: 4.5 - 0.5,
      motionPath: {
        path: '#star-path-9',
        align: '#star-path-9',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: 0,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .set('#star-9', {
      display: 'none',
    })
}

const animateBubbles = () => {
  gsap
    .timeline()
    .to('#bubble-0', {
      duration: 5.5,
      delay: 1.6,
      motionPath: {
        path: '#bubble-path-0',
        align: '#bubble-path-0',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.2,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .set('#bubble-0', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#bubble-1', {
      duration: 7,
      delay: 1.5,
      motionPath: {
        path: '#bubble-path-1',
        align: '#bubble-path-1',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.01,
      immediateRender: true,
      ease: Power4.easeOut,
    })
    .set('#bubble-1', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#bubble-2', {
      duration: 6,
      delay: 1.3,
      motionPath: {
        path: '#bubble-path-2',
        align: '#bubble-path-2',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.2,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .set('#bubble-2', {
      display: 'none',
    })

  gsap
    .timeline()
    .to('#bubble-3', {
      duration: 6,
      delay: 1.35,
      motionPath: {
        path: '#bubble-path-3',
        align: '#bubble-path-3',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.2,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .set('#bubble-3', {
      display: 'none',
    })
}
