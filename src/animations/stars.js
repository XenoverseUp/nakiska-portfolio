import gsap, { Power3, Power2, Power4 } from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import { ANIMATION_SPEED_MULTIPLIER } from 'config'

gsap.registerPlugin(MotionPathPlugin)
let timelines = []

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

  gsap.set('#bubble-0', { '--size': '65vw' })
  gsap.set('#bubble-1', {
    '--size': matchMedia('(max-width: 600px)').matches ? '80vh' : '70vw',
  })
  gsap.set('#bubble-2', { '--size': '60vw' })
  gsap.set('#bubble-3', { '--size': '64vw' })
  gsap.set('#bubble-4', { '--size': '32vw' })
  gsap.set('#bubble-5', { '--size': '40vw' })
}

export const animate = () => {
  animateStars()
  animateBubbles()
}

export const reset = () => {
  setup()
  timelines.forEach((tl) => tl.seek(1 * ANIMATION_SPEED_MULTIPLIER))
}

const animateStars = () => {
  timelines[0] = gsap
    .timeline()
    .to('#star-0', {
      delay: 1 * ANIMATION_SPEED_MULTIPLIER,
      duration: 3 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#star-path-0',
        align: '#star-path-0',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.7,
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .to(
      '#star-0',
      {
        rotation: `${['+', '-'].sample()}720`,
        duration: 7.5 * ANIMATION_SPEED_MULTIPLIER,
        ease: 'none',
      },
      `-=${3 * ANIMATION_SPEED_MULTIPLIER}`
    )
    .set('#star-0', {
      display: 'none',
    })

  timelines[1] = gsap
    .timeline()
    .to('#star-1', {
      delay: 1 * ANIMATION_SPEED_MULTIPLIER,
      duration: 4.5 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#star-path-1',
        align: '#star-path-1',
        alignOrigin: [0.5, 0.5],
      },
      keyframes: {
        scale: [1, 0.8, 0.5, 0.2, 0.15],
      },
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .to(
      '#star-1',
      {
        rotation: `${['+', '-'].sample()}720`,
        duration: 7.5 * ANIMATION_SPEED_MULTIPLIER,
        ease: 'none',
      },
      `-=${4.5 * ANIMATION_SPEED_MULTIPLIER}`
    )
    .set('#star-1', {
      display: 'none',
    })

  timelines[2] = gsap
    .timeline()
    .to('#star-2', {
      delay: 1 * ANIMATION_SPEED_MULTIPLIER,
      duration: 4.5 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#star-path-2',
        align: '#star-path-2',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.15,
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .to(
      '#star-2',
      {
        rotation: `${['+', '-'].sample()}720`,
        duration: 7.5 * ANIMATION_SPEED_MULTIPLIER,
        ease: 'none',
      },
      `-=${4.5 * ANIMATION_SPEED_MULTIPLIER}`
    )
    .set('#star-2', {
      display: 'none',
    })

  timelines[3] = gsap
    .timeline()
    .to('#star-3', {
      delay: 1 * ANIMATION_SPEED_MULTIPLIER,
      duration: 5 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#star-path-3',
        align: '#star-path-3',
        alignOrigin: [0.5, 0.5],
      },
      keyframes: {
        scale: [1, 1, 0.8, 0.5, 0.3, 0.1],
      },
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .to(
      '#star-3',
      {
        rotation: `${['+', '-'].sample()}720`,
        duration: 7.5 * ANIMATION_SPEED_MULTIPLIER,
        ease: 'none',
      },
      `-=${5 * ANIMATION_SPEED_MULTIPLIER}`
    )
    .set('#star-3', {
      display: 'none',
    })

  timelines[4] = gsap
    .timeline()
    .to('#star-4', {
      delay: 1 * ANIMATION_SPEED_MULTIPLIER,
      duration: 4.5 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#star-path-4',
        align: '#star-path-4',
        alignOrigin: [0.5, 0.5],
      },
      keyframes: {
        scale: [1, 1, 0.8, 0.5, 0.3, 0.1],
      },
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .to(
      '#star-4',
      {
        rotation: `${['+', '-'].sample()}720`,
        duration: 7.5 * ANIMATION_SPEED_MULTIPLIER,
        ease: 'none',
      },
      `-=${4.5 * ANIMATION_SPEED_MULTIPLIER}`
    )
    .set('#star-4', {
      display: 'none',
    })

  timelines[5] = gsap
    .timeline()
    .to('#star-5', {
      delay: 1 * ANIMATION_SPEED_MULTIPLIER,
      duration: 5 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#star-path-5',
        align: '#star-path-5',
        alignOrigin: [0.5, 0.5],
      },
      keyframes: {
        scale: [1, 0.5, 0.3, 0.1],
      },
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .to(
      '#star-5',
      {
        rotation: `${['+', '-'].sample()}720`,
        duration: 7.5 * ANIMATION_SPEED_MULTIPLIER,
        ease: 'none',
      },
      `-=${5 * ANIMATION_SPEED_MULTIPLIER}`
    )
    .set('#star-5', {
      display: 'none',
    })

  timelines[6] = gsap
    .timeline()
    .to('#star-6', {
      delay: 1 * ANIMATION_SPEED_MULTIPLIER,
      duration: 3.5 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#star-path-6',
        align: '#star-path-6',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0,
      immediateRender: true,
      ease: Power2.easeOut,
    })
    .to(
      '#star-6',
      {
        rotation: `${['+', '-'].sample()}720`,
        duration: 7.5 * ANIMATION_SPEED_MULTIPLIER,
        ease: 'none',
      },
      `-=${3.5 * ANIMATION_SPEED_MULTIPLIER}`
    )
    .set('#star-6', {
      display: 'none',
    })

  timelines[7] = gsap
    .timeline()
    .to('#star-7', {
      delay: 1 * ANIMATION_SPEED_MULTIPLIER,
      duration: 4 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#star-path-7',
        align: '#star-path-7',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .to(
      '#star-7',
      {
        rotation: `${['+', '-'].sample()}720`,
        duration: 7.5 * ANIMATION_SPEED_MULTIPLIER,
        ease: 'none',
      },
      `-=${4 * ANIMATION_SPEED_MULTIPLIER}`
    )
    .set('#star-7', {
      display: 'none',
    })

  timelines[8] = gsap
    .timeline()
    .to('#star-8', {
      delay: 1 * ANIMATION_SPEED_MULTIPLIER,
      duration: 4 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#star-path-8',
        align: '#star-path-8',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .to(
      '#star-8',
      {
        rotation: `${['+', '-'].sample()}720`,
        duration: 7.5 * ANIMATION_SPEED_MULTIPLIER,
        ease: 'none',
      },
      `-=${4 * ANIMATION_SPEED_MULTIPLIER}`
    )
    .set('#star-8', {
      display: 'none',
    })

  timelines[9] = gsap
    .timeline()
    .to('#star-9', {
      delay: 1 * ANIMATION_SPEED_MULTIPLIER,
      duration: 4 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#star-path-9',
        align: '#star-path-9',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .to(
      '#star-9',
      {
        rotation: `${['+', '-'].sample()}720`,
        duration: 7.5 * ANIMATION_SPEED_MULTIPLIER,
        ease: 'none',
      },
      `-=${4 * ANIMATION_SPEED_MULTIPLIER}`
    )
    .set('#star-9', {
      display: 'none',
    })
}

const animateBubbles = () => {
  timelines[10] = gsap
    .timeline()
    .to('#bubble-0', {
      duration: 5.5 * ANIMATION_SPEED_MULTIPLIER,
      delay: 1.6 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#bubble-path-0',
        align: '#bubble-path-0',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.2,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .set('#bubble-0', {
      display: 'none',
    })

  timelines[11] = gsap
    .timeline()
    .to('#bubble-1', {
      duration: 5 * ANIMATION_SPEED_MULTIPLIER,
      delay: 1.5 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#bubble-path-1',
        align: '#bubble-path-1',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.15,
      immediateRender: true,
      ease: Power4.easeOut,
    })
    .set('#bubble-1', {
      display: 'none',
    })

  timelines[12] = gsap
    .timeline()
    .to('#bubble-2', {
      duration: 6 * ANIMATION_SPEED_MULTIPLIER,
      delay: 1.3 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#bubble-path-2',
        align: '#bubble-path-2',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.2,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .set('#bubble-2', {
      display: 'none',
    })

  timelines[13] = gsap
    .timeline()
    .to('#bubble-3', {
      duration: 6 * ANIMATION_SPEED_MULTIPLIER,
      delay: 1.35 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#bubble-path-3',
        align: '#bubble-path-3',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.2,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .set('#bubble-3', {
      display: 'none',
    })

  timelines[14] = gsap
    .timeline()
    .to('#bubble-4', {
      duration: 5.5 * ANIMATION_SPEED_MULTIPLIER,
      delay: 1.3 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#bubble-path-4',
        align: '#bubble-path-4',
        alignOrigin: [0.5, 0.5],
      },
      scale: 0.4,
      immediateRender: true,
      ease: Power4.easeOut,
    })
    .set('#bubble-4', {
      display: 'none',
    })

  timelines[15] = gsap
    .timeline()
    .to('#bubble-5', {
      duration: 5 * ANIMATION_SPEED_MULTIPLIER,
      delay: 1.4 * ANIMATION_SPEED_MULTIPLIER,
      motionPath: {
        path: '#bubble-path-5',
        align: '#bubble-path-5',
        alignOrigin: [0.5, 0.5],
      },
      scale: matchMedia('(max-width: 600px)').matches ? 0.1 : 0.5,
      immediateRender: true,
      ease: Power3.easeOut,
    })
    .set('#bubble-5', {
      display: 'none',
    })
}
