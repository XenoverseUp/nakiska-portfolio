import styles from '@sc/Cursor.module.scss'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import useEventListener from 'hooks/useEventListener'
import { Cursor as CursorConfig } from '../../config'
import { ReactComponent as Star } from 'assets/svg/Star.svg'
import { animateCursor, setup } from '../animations/cursor'
import isHighlighting from '../utils/isHighlighting'
import cx from 'cx'
import Reel from './Reel'
import useHasCursor from '../hooks/useHasCursor'

const Cursor = () => {
  const cursor = useRef(null)
  const cursorText = useRef(null)
  const follower = useRef(null)
  const close = useRef(null)
  let followerTween = useRef(null)
  const hasCursor = useHasCursor()

  const [reelOpen, setReelOpen] = useState(false)

  const openReel = useCallback(() => setReelOpen(true), [setReelOpen])
  const closeReel = useCallback(() => setReelOpen(false), [setReelOpen])
  const toggleReel = useCallback(
    () => setReelOpen((state) => !state),
    [setReelOpen]
  )

  useEffect(() => {
    if (hasCursor.current) setup(cursor, follower, followerTween, close)
    else document.body.style.cursor = 'auto'
  }, [])

  const moveCursor = useCallback(
    (e) =>
      hasCursor.current &&
      animateCursor(
        e,
        cursor,
        follower,
        cursorText,
        followerTween,
        close,
        reelOpen
      ),
    [reelOpen]
  )

  /** @param {MouseEvent} e */
  const handleDesktopReel = (e) => {
    if (
      !(
        (e.target.dataset.cursorHover && !e.target.dataset.closeReel) ||
        e.target.dataset.cursorMail ||
        e.target.dataset.cursorText
      ) &&
      !isHighlighting()
    ) {
      animateCursor(
        e,
        cursor,
        follower,
        cursorText,
        followerTween,
        close,
        !reelOpen
      )
      toggleReel()
    }
  }

  useEventListener('mousemove', moveCursor, hasCursor.current)
  useEventListener('click', handleDesktopReel, hasCursor.current)

  return (
    <Fragment>
      <div
        ref={cursor}
        className={cx(styles.cursor, { [styles.coarse]: !hasCursor.current })}
        {...(!hasCursor.current && { onClick: openReel })}
      >
        <div className={styles.close} ref={close}>
          <span />
          <span />
        </div>
        <span ref={cursorText} className={styles.cursorText}>
          {CursorConfig.playReel}
        </span>
      </div>
      <div
        ref={follower}
        className={cx(styles.follower, { [styles.coarse]: !hasCursor.current })}
      >
        <Star
          width={hasCursor ? 30 : '2rem'}
          height={hasCursor ? 30 : '2rem'}
        />
      </div>
      <Reel open={reelOpen} {...{ closeReel, moveCursor }} />
    </Fragment>
  )
}

export default Cursor
