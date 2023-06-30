import styles from '@sc/Cursor.module.scss'
import { Fragment, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useEventListener from 'hooks/useEventListener'
import { ReactComponent as Star } from 'assets/svg/Star.svg'

const Cursor = () => {
  const cursor = useRef(null)
  const cursorText = useRef(null)
  const follower = useRef(null)

  const moveCursor = (e) => {
    // Mouse follow
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
    })

    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
    })
    ////

    gsap.to(follower.current, {
      xPercent: 150,
      yPercent: -250,
    })

    if (e.target.dataset.hover) {
      cursorText.current.innerText = ''

      gsap.to(cursor.current, {
        background: '#fff',
        width: 25,
        height: 25,
        duration: 0.3,
      })

      gsap.to(follower.current, {
        scale: 0,
        opacity: 0.3,
        xPercent: -50,
        yPercent: -50,
        duration: 0.5,
      })
    } else {
      cursorText.current.innerText = 'play reel'

      gsap.to(cursor.current, {
        background: 'transparent',
        width: 108,
        height: 108,
        duration: 0.2,
      })

      gsap.to(follower.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
      })
    }
  }

  // Default styles
  useEffect(() => {
    gsap.set(cursor.current, {
      xPercent: -50,
      yPercent: -50,
    })

    gsap.set(follower.current, {
      xPercent: 150,
      yPercent: -250,
    })

    gsap.to(follower.current, {
      rotate: 360,
      duration: 4,
      repeat: -1,
      ease: 'none',
    })
  }, [])

  useEventListener('mousemove', moveCursor)

  return (
    <Fragment>
      <div ref={cursor} className={styles.cursor}>
        <span ref={cursorText} className={styles.cursorText}>
          play reel
        </span>
      </div>
      <div ref={follower} className={styles.follower}>
        <Star width={31} height={31} />
      </div>
    </Fragment>
  )
}

export default Cursor
