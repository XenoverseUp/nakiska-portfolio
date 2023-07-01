import { gsap } from 'gsap'
import { Cursor } from '../../config'

export const setup = (cursor, follower, followerTween) => {
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
}

export const animateCursor = (
  e,
  cursor,
  follower,
  cursorText,
  followerTween
) => {
  // Mouse follow
  gsap.to(cursor.current, {
    x: e.clientX,
    y: e.clientY,
    duration: Cursor.cursorFlexibility,
  })

  gsap.to(follower.current, {
    x: e.clientX,
    y: e.clientY,
    duration: Cursor.followerFlexibility,
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
    cursorText.current.innerText = Cursor.mailMe

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
    cursorText.current.innerText = Cursor.playReel

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

    gsap.to(cursor.current, {
      opacity: 1,
      background: 'transparent',
      width: 108,
      height: 108,
      duration: 0.2,
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
