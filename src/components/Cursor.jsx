import styles from '@sc/Cursor.module.scss'
import { Fragment, useCallback, useEffect, useRef } from 'react'
import useEventListener from 'hooks/useEventListener'
import { Cursor as CursorConfig } from '../../config'
import { ReactComponent as Star } from 'assets/svg/Star.svg'
import { animateCursor, setup } from '../animations/cursor'
import cx from 'cx'

const Cursor = () => {
  const cursor = useRef(null)
  const cursorText = useRef(null)
  const follower = useRef(null)
  let followerTween = useRef(null)
  const hasCursor = useRef(
    matchMedia('(hover: hover) and (pointer: fine)').matches
  )

  useEffect(() => {
    if (hasCursor.current) {
      setup(cursor, follower, followerTween)
    } else document.body.style.cursor = 'auto'
  }, [])

  const moveCursor = useCallback(
    (e) => animateCursor(e, cursor, follower, cursorText, followerTween),
    []
  )

  useEventListener('mousemove', moveCursor, hasCursor.current)

  return (
    <Fragment>
      <div
        ref={cursor}
        className={cx(styles.cursor, { [styles.coarse]: !hasCursor.current })}
      >
        <span ref={cursorText} className={styles.cursorText}>
          {CursorConfig.playReel}
        </span>
      </div>
      <div
        ref={follower}
        className={cx(styles.follower, { [styles.coarse]: !hasCursor.current })}
      >
        <Star />
      </div>
    </Fragment>
  )
}

export default Cursor
