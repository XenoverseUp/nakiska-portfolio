import { CSSTransition } from 'react-transition-group'
import Portal from './Portal'
import styles from '@sc/Reel.module.scss'
import { useEffect } from 'react'
import { REEL_FADE_DURATION } from '../../config'
import ReelPlayer from './ReelPlayer'

const Reel = ({ open, closeReel, hasCursor, moveCursor }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => {
      moveCursor(e)
      return e.key === 'Escape' ? closeReel() : null
    }
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [closeReel])

  return (
    <Portal id="reel">
      <CSSTransition
        in={open}
        timeout={{ entry: REEL_FADE_DURATION, exit: REEL_FADE_DURATION }}
        unmountOnExit
        classNames="modal"
      >
        <section
          className={styles.main}
          {...(!hasCursor.current && { onClick: closeReel })}
        >
          <ReelPlayer />
        </section>
      </CSSTransition>
    </Portal>
  )
}

export default Reel
