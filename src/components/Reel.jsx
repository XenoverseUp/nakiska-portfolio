import { CSSTransition } from 'react-transition-group'
import Portal from './Portal'
import styles from '@sc/Reel.module.scss'
import { useEffect } from 'react'
import { REEL_FADE_DURATION, reel } from '../../config'
import ReelPlayer from './ReelPlayer'
import { useDebugValue } from 'react'

const Reel = ({ open, closeReel, moveCursor }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => {
      if (e.key === 'Escape') {
        moveCursor(e)
        closeReel()
      }
    }
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [closeReel])

  useDebugValue('amk')

  return (
    <Portal id="reel">
      <CSSTransition
        in={open}
        timeout={{ entry: REEL_FADE_DURATION, exit: REEL_FADE_DURATION }}
        unmountOnExit
        classNames="modal"
      >
        <section className={styles.main}>
          <ReelPlayer src={reel.url} closeReel={closeReel} />
        </section>
      </CSSTransition>
    </Portal>
  )
}

export default Reel
