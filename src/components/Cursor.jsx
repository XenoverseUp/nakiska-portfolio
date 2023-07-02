import styles from '@sc/Cursor.module.scss'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import useEventListener from 'hooks/useEventListener'
import { Cursor as CursorConfig } from '../../config'
import { ReactComponent as Star } from 'assets/svg/Star.svg'
import { animateCursor, setup } from '../animations/cursor'
import isHighlighting from '../utils/isHighlighting'
import cx from 'cx'
import Reel from './Reel'

const Cursor = () => {
  const cursor = useRef(null)
  const cursorText = useRef(null)
  const follower = useRef(null)
  let followerTween = useRef(null)
  const hasCursor = useRef(
    matchMedia('(hover: hover) and (pointer: fine)').matches
  )

  const [reelOpen, setReelOpen] = useState(false)

  useEffect(() => {
    if (hasCursor.current) {
      setup(cursor, follower, followerTween)
    } else document.body.style.cursor = 'auto'
  }, [])

  const moveCursor = useCallback(
    (e) => animateCursor(e, cursor, follower, cursorText, followerTween),
    []
  )

  /** @param {MouseEvent} e */
  const handleReel = (e) => {
    if (
      !(
        (e.target.dataset.cursorHover && !e.target.dataset.closeReel) ||
        e.target.dataset.cursorMail
      ) &&
      (!reelOpen || e.target.dataset.closeReel) &&
      !isHighlighting()
    ) {
      setReelOpen((state) => !state)
    }
  }
  useEventListener('mousemove', moveCursor, hasCursor.current)
  useEventListener('click', handleReel, hasCursor.current)

  return (
    <Fragment>
      <div
        ref={cursor}
        onClick={handleReel}
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
        <Star
          width={hasCursor ? 30 : '2rem'}
          height={hasCursor ? 30 : '2rem'}
        />
      </div>
      <Reel open={reelOpen} setOpen={setReelOpen} />
    </Fragment>
  )
}

export default Cursor
