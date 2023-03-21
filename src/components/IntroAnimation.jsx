import styles from '@sc/IntroAnimation.module.scss'
import cx from 'cx'
import wait from '../utils/wait'
import { Fragment, useLayoutEffect } from 'react'
import Paths from 'components/Paths'
import { bubbleTimeline, starTimeline } from 'animations/introAnimations'
import { removeLoader, animateLoader } from 'animations/loaderAnimations'
import gsap, {
  Linear,
  Sine,
  Power3,
  Power2,
  Power1,
  Power4,
  Expo,
  Circ,
} from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const IntroAnimation = () => {
  useLayoutEffect(() => {
    ;(async () => {
      // animateLoader()
      // await wait(2000)
      // removeLoader()
      // for (let i = 0; i < 7; i++) {
      //   starTimeline(`#star-${i}`, `#star-path-${i}`).play()
      //   bubbleTimeline(`#bubble-${i}`, `#bubble-path-${i}`).play()
      // }
    })()

    // STAR 0

    gsap.set('#star-0', {
      xPercent: -50,
      yPercent: -50,
      '--size': '50vw', //'clamp(200px, 40%, 400px);',

      opacity: 1,
    })

    gsap.set('#star-1', {
      xPercent: -50,
      yPercent: -50,
      '--size': '50vw',

      opacity: 1,
    })

    gsap.set('#star-2', {
      xPercent: -50,
      yPercent: -50,
      '--size': '50vw',

      opacity: 1,
    })

    gsap.set('#star-3', {
      xPercent: -50,
      yPercent: -50,
      '--size': '50vw',

      opacity: 1,
    })

    gsap.set('#star-4', {
      xPercent: -50,
      yPercent: -50,
      '--size': '50vw',

      opacity: 1,
    })

    gsap.set('#star-5', {
      xPercent: -50,
      yPercent: -50,
      '--size': '50vw',

      opacity: 1,
    })

    gsap.set('#star-6', {
      xPercent: -50,
      yPercent: -50,
      '--size': '70vw',

      opacity: 1,
    })

    gsap
      .timeline()
      .to('#star-0', {
        duration: 3.5,
        motionPath: {
          path: '#star-path-0',
          align: '#star-path-0',
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        scale: 0.7,
        immediateRender: true,
        ease: Power4.easeInOut,
      })
      .set('#star-1', {
        display: 'none',
      })

    // STAR 1

    gsap
      .timeline()
      .to('#star-1', {
        duration: 5,
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
        ease: Power4.easeInOut,
      })
      .set('#star-1', {
        display: 'none',
      })

    // STAR 2

    gsap
      .timeline()
      .to('#star-2', {
        duration: 5,
        motionPath: {
          path: '#star-path-2',
          align: '#star-path-2',
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        scale: 0.15,
        immediateRender: true,
        ease: Power4.easeInOut,
      })
      .set('#star-2', {
        display: 'none',
      })

    // STAR 3

    gsap
      .timeline()
      .to('#star-3', {
        duration: 5.5,
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
        ease: Power2.easeInOut,
      })
      .set('#star-3', {
        display: 'none',
      })

    // STAR 4

    gsap
      .timeline()
      .to('#star-4', {
        duration: 5,
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
        ease: Power2.easeInOut,
      })
      .set('#star-4', {
        display: 'none',
      })

    // STAR 5

    gsap
      .timeline()
      .to('#star-5', {
        duration: 5.5,
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
        ease: Power2.easeInOut,
      })
      .set('#star-5', {
        display: 'none',
      })

    // STAR 6

    gsap
      .timeline()
      .to('#star-6', {
        duration: 4,
        motionPath: {
          path: '#star-path-6',
          align: '#star-path-6',
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },

        scale: 0,
        immediateRender: true,
        ease: Power2.easeInOut,
      })
      .set('#star-6', {
        display: 'none',
      })
  }, [])

  return (
    <div>
      {new Array(7).fill(null).map((_, i) => (
        <Fragment key={`star-${i}`}>
          <svg
            className={styles.star}
            key={`star-${i}`}
            id={`star-${i}`}
            viewBox="0 0 95 94"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.2952 20.9045C0.393887 20.445 -6.1966 44.2426 9.39077 53.0575C-2.12973 66.7668 12.3669 86.757 28.9772 80.0663C32.5127 97.621 57.1801 98.7508 62.3055 81.5928C78.2346 89.7738 94.4978 71.1924 84.2787 56.4874C100.607 49.1343 96.219 24.8339 78.3507 23.6551C82.782 6.3048 61.0476 -5.41591 48.9852 7.81916C38.1832 -6.46312 15.4684 3.22181 18.2952 20.9045Z"
            />
          </svg>

          <svg
            key={`bubble-${i}`}
            id={`bubble-${i}`}
            className={styles.bubble}
            width="145"
            height="145"
            viewBox="0 0 145 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="72.5" cy="72.5" r="72.5" fill="#FF4B36" />
          </svg>
        </Fragment>
      ))}
      <Paths />
    </div>
  )
}

export default IntroAnimation
