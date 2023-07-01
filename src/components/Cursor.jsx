import styles from '@sc/Cursor.module.scss'
import { Fragment, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useEventListener from 'hooks/useEventListener'
import { Cursor as CursorConfig } from '../../config'
import { ReactComponent as Star } from 'assets/svg/Star.svg'

const Cursor = () => {
  const cursor = useRef(null)
  const cursorText = useRef(null)
  const follower = useRef(null)
  let followerTween = useRef(null)

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

    if (e.target.dataset.cursorHover) {
      cursorText.current.innerText = ''

      gsap.to(cursor.current, {
        opacity: 0,
        background: '#fff',
        width: 25,
        height: 25,
        duration: 0.3,
      })

      gsap.to(follower.current, {
        xPercent: -50,
        yPercent: -50,
        duration: 0.5,
      })

      gsap.to(followerTween.current, {
        timeScale: e.target.dataset.swapperHover ? 5 : 3,
        overwrite: 'auto',
      })
    } else if (e.target.dataset.cursorMail) {
      cursorText.current.innerText = CursorConfig.mailMe

      gsap.set(cursor.current, {
        css: {
          mixBlendMode: 'normal',
        },
      })

      gsap.set(cursorText.current, {
        color: '#000',
      })

      gsap.to(cursor.current, {
        opacity: 1,
        background: '#fff',
        width: 108,
        height: 108,
        duration: 0.2,
      })

      gsap.to(followerTween.current, {
        timeScale: 3,
        overwrite: 'auto',
      })
    } else {
      cursorText.current.innerText = CursorConfig.playReel

      gsap.to(cursor.current, {
        opacity: 1,
        background: 'transparent',
        width: 108,
        height: 108,
        duration: 0.2,
      })

      gsap.set(cursor.current, {
        css: {
          mixBlendMode: 'exclusion',
        },
      })

      gsap.set(follower.current, {
        opacity: 1,
      })

      gsap.set(cursorText.current, {
        color: '#fff',
      })

      gsap.to(follower.current, {
        xPercent: 150,
        yPercent: -250,
      })

      gsap.to(followerTween.current, {
        timeScale: 1,
        overwrite: 'auto',
      })
    }
  }

  // Default styles
  useEffect(() => {
    gsap.set(cursor.current, {
      xPercent: -50,
      yPercent: -50,
    })

    gsap.set(cursor.current, {
      opacity: 0,
    })

    gsap.set(follower.current, {
      xPercent: 150,
      yPercent: -250,
    })

    followerTween.current = gsap.to(follower.current, {
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
