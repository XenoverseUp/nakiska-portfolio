import { Fragment, useEffect, useRef } from 'react'
import styles from '@sc/IntroAnimation.module.scss'
import cx from 'cx'
import Paths from 'components/Paths'
import gsap from 'gsap'
import { setup, animate } from 'animations/intro'

const IntroAnimation = () => (
  <AnimationBoundary>
    <ViewBoundary>
      {new Array(6).fill(null).map((_, i) => (
        <svg
          key={`bubble-${i}`}
          id={`bubble-${i}`}
          className={cx('bubble', styles.bubble)}
          width="145"
          height="145"
          viewBox="0 0 145 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="72.5" cy="72.5" r="72.5" fill="#FF4B36" />
        </svg>
      ))}
      {new Array(10).fill(null).map((_, i) => (
        <Fragment key={`star-${i}`}>
          <svg
            className={cx('star', styles.star)}
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
        </Fragment>
      ))}
    </ViewBoundary>
    <Paths />
  </AnimationBoundary>
)

const AnimationBoundary = ({ children }) => {
  const boundary = useRef(null)

  useEffect(() => {
    gsap.context(() => {
      setup()
      animate()
    }, boundary)
  }, [])
  return <div ref={boundary}>{children}</div>
}

const ViewBoundary = ({ children }) => (
  <section className={styles.viewBoundary}>{children}</section>
)

export default IntroAnimation
