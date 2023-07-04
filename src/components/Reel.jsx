import { CSSTransition } from 'react-transition-group'
import Portal from './Portal'
import styles from '@sc/Reel.module.scss'
import { useEffect, useRef } from 'react'

const Reel = ({ open, closeReel, hasCursor }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? closeReel() : null)
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [closeReel])

  return (
    <Portal id="reel">
      <CSSTransition
        in={open}
        timeout={{ entry: 300, exit: 300 }}
        unmountOnExit
        classNames="modal"
      >
        <section
          className={styles.main}
          {...(!hasCursor.current && { onClick: closeReel })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </section>
      </CSSTransition>
    </Portal>
  )
}

export default Reel
