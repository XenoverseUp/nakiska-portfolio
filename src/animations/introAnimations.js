import gsap, { Sine, Power3, Power2, Power1, Power4, Expo, Circ } from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

export const starTimeline = (star, starPath) => {
  gsap.set(star, {
    transformOrigin: '50% 50%',
    xPercent: -50,
    yPercent: -50,
    opacity: 1,
  })

  return gsap
    .timeline({ paused: true })
    .to(star, {
      duration: 3,
      motionPath: {
        path: starPath,
        align: starPath,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: gsap.utils.random([
        ...new Array(4).fill(0.05),
        ...new Array(6).fill(0.075),
        ...new Array(6).fill(0.1),
        ...new Array(6).fill(0.15),
        ...new Array(5).fill(0.2),
        ...new Array(2).fill(0.3),
      ]),
      immediateRender: true,
      ease: gsap.utils.random([
        Power1.easeInOut,
        Power2.easeInOut,
        Power3.easeInOut,
        Power4.easeInOut,
        Sine.easeInOut,
      ]),
    })
    .to(star, {
      duration: 0.8,
      scale: 0,
      rotation: `${Math.floor(Math.random() * 20 + 40)}_${
        Math.random() - 0.5 > 0 ? 'cw' : 'ccw'
      }`,
      ease: gsap.utils.random([
        Power2.easeInOut,
        Power3.easeInOut,
        Power4.easeInOut,
        Circ.easeInOut,
        Expo.easeInOut,
        Sine.easeInOut,
      ]),
    })
    .set(star, {
      display: 'none',
    })
}

export const bubbleTimeline = (bubble, bubblePath) => {
  gsap.set(bubble, {
    transformOrigin: '50% 50%',
    xPercent: -50,
    yPercent: -50,
    opacity: 1,
  })

  return gsap
    .timeline({ paused: true })
    .to(bubble, {
      delay: 0.25,
      duration: 2.75,
      motionPath: {
        path: bubblePath,
        align: bubblePath,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scale: gsap.utils.random([
        ...new Array(4).fill(0.05),
        ...new Array(6).fill(0.075),
        ...new Array(6).fill(0.1),
        ...new Array(6).fill(0.15),
        ...new Array(5).fill(0.2),
        ...new Array(2).fill(0.3),
      ]),
      immediateRender: true,
      ease: gsap.utils.random([
        Power2.easeInOut,
        Power3.easeInOut,
        Sine.easeInOut,
        Circ.easeInOut,
        Expo.easeInOut,
      ]),
    })
    .to(bubble, {
      delay: Math.random() / 2,
      duration: 0.5,
      scale: 0,
      ease: gsap.utils.random([
        Power1.easeInOut,
        Power2.easeInOut,
        Power3.easeInOut,
        Power4.easeInOut,
        Circ.easeInOut,
        Expo.easeInOut,
        Sine.easeInOut,
      ]),
    })
    .set(bubble, {
      display: 'none',
    })
}
