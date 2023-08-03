import { gsap } from 'gsap'
import { Cursor } from 'config'
import FollowerType from 'utils/FollowerTypes'

export const setup = (cursor, follower, followerTween, close) => {
  gsap.set(cursor.current, {
    xPercent: -50,
    yPercent: -50,
  })

  gsap.set([cursor.current, close.current], {
    opacity: 0,
  })

  if (Cursor.followerType == FollowerType.CUSTOM) {
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
}

export const animateCursor = (
  e,
  cursor,
  follower,
  cursorText,
  followerTween,
  closeIcon,
  reelOpen
) => {
  gsap.to(cursor.current, {
    x: e.clientX,
    y: e.clientY,
    duration: Cursor.cursorFlexibility,
  })

  if (Cursor.followerType == FollowerType.CUSTOM)
    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: Cursor.followerFlexibility,
    })

  if (e.target.dataset.cursorHover)
    hoverCursor(
      e,
      cursor,
      follower,
      cursorText,
      followerTween,
      closeIcon,
      reelOpen
    )
  else if (e.target.dataset.cursorMail)
    mailCursor(cursor, follower, cursorText, closeIcon)
  else if (e.target.dataset.cursorText)
    textCursor(cursor, follower, cursorText, followerTween, closeIcon)
  else if (reelOpen)
    reelCursor(cursor, follower, cursorText, followerTween, closeIcon)
  else
    defaultCursor(
      cursor,
      follower,
      cursorText,
      followerTween,
      closeIcon,
      reelOpen
    )
}

const defaultCursor = (
  cursor,
  follower,
  cursorText,
  followerTween,
  closeIcon
) => {
  cursorText.current.innerText = Cursor.playReel

  gsap.set(cursor.current, {
    css: {
      mixBlendMode: 'exclusion',
    },
  })

  if (Cursor.followerType == FollowerType.CUSTOM)
    gsap.to(follower.current, {
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

  gsap.to(cursorText.current, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
  })

  gsap.to(closeIcon.current, {
    opacity: 0,
    duration: 0.3,
  })

  if (Cursor.followerType == FollowerType.CUSTOM) {
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

const hoverCursor = (
  e,
  cursor,
  follower,
  cursorText,
  followerTween,
  closeIcon
) => {
  cursorText.current.innerText = ''

  gsap.to(cursor.current, {
    opacity: Cursor.followerType == FollowerType.NONE ? 1 : 0,
    width: 25,
    height: 25,
    duration: 0.3,
  })

  gsap.to(cursorText.current, {
    scale: 0,
    opacity: 0,
    duration: 0.2,
  })

  gsap.to(closeIcon.current, {
    opacity: 0,
    duration: 0.3,
  })

  if (Cursor.followerType == FollowerType.CUSTOM) {
    gsap.to(follower.current, {
      opacity: 1,
      xPercent: -50,
      yPercent: -50,
      duration: 0.5,
    })

    gsap.to(followerTween.current, {
      timeScale: e.target.dataset.swapperHover ? 5 : 3,
      overwrite: 'auto',
    })
  }
}

const mailCursor = (cursor, follower, cursorText, closeIcon) => {
  cursorText.current.innerText = Cursor.mailMe

  gsap.set(cursor.current, {
    css: {
      mixBlendMode: 'normal',
    },
  })

  gsap.set(cursorText.current, {
    color: Cursor.mailMeForeground,
  })

  gsap.to(cursor.current, {
    opacity: 1,
    background: Cursor.mailMeBackground,
    width: 108,
    height: 108,
    duration: 0.2,
  })

  if (Cursor.followerType == FollowerType.CUSTOM)
    gsap.to(follower.current, {
      opacity: 0,
      xPercent: 150,
      yPercent: -250,
      duration: 0.4,
    })

  gsap.to(cursorText.current, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
  })

  gsap.to(cursorText.current, {
    opacity: 1,
    duration: 0.3,
  })

  gsap.to(closeIcon.current, {
    opacity: 0,
    duration: 0.3,
  })
}

const textCursor = (cursor, follower, cursorText, followerTween, closeIcon) => {
  gsap.to(cursorText.current, {
    scale: 0.75,
    opacity: 0,
    duration: 0.3,
  })

  gsap.to(closeIcon.current, {
    opacity: 0,
    duration: 0.3,
  })

  gsap.to(cursor.current, {
    opacity: 1,
    background: 'transparent',
    width: 108,
    height: 108,
    duration: 0.2,
  })

  if (Cursor.followerType == FollowerType.CUSTOM) {
    gsap.to(follower.current, {
      opacity: 1,
      xPercent: 150,
      yPercent: -250,
    })

    gsap.to(followerTween.current, {
      timeScale: 1,
      overwrite: 'auto',
    })
  }
}

const reelCursor = (cursor, follower, cursorText, followerTween, closeIcon) => {
  gsap.to(cursorText.current, {
    scale: 0.75,
    opacity: 0,
    duration: 0.3,
  })

  gsap.to(closeIcon.current, {
    opacity: 1,
    duration: 0.3,
  })

  gsap.to(cursor.current, {
    opacity: 1,
    width: 108,
    height: 108,
    background: 'transparent',
    duration: 0.2,
  })

  if (Cursor.followerType == FollowerType.CUSTOM) {
    gsap.to(follower.current, {
      opacity: 0,
      xPercent: 130,
      yPercent: -220,
    })

    gsap.to(followerTween.current, {
      timeScale: 2,
      overwrite: 'auto',
    })
  }
}
