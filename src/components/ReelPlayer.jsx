import {
  Root,
  Viewport,
  Video,
  Container,
  useMediaPlaying,
} from '@react-av/core'
import { useCallback, useLayoutEffect } from 'react'
import useHasCursor from '../hooks/useHasCursor'
import styles from '../styles/components/ReelPlayer.module.scss'
import cx from 'cx'

function PlayPauseButton() {
  const [playing, setPlaying] = useMediaPlaying()

  useLayoutEffect(() => setPlaying(true), [])

  return (
    <button
      className={styles.playButton}
      data-cursor-hover
      onClick={(e) => {
        e.stopPropagation()
        setPlaying(!playing)
      }}
    >
      {!playing ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={styles.play}
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  )
}

const ReelPlayer = ({ src, title, closeReel }) => {
  const hasCursor = useHasCursor()

  const close = useCallback(
    (e) => {
      closeReel()
    },
    [closeReel]
  )

  return (
    <Root>
      <Container className={styles.container}>
        <Video className={styles.video} {...{ src }} />
      </Container>
      <Viewport
        inactiveClassName={cx(styles.inactive, {
          [styles.coarse]: !hasCursor.current,
        })}
        className={styles.viewport}
        {...(!hasCursor.current && { onClick: close })}
      >
        <div className={styles.controls}>
          <PlayPauseButton />
          <p>{title}</p>
        </div>
      </Viewport>
    </Root>
  )
}

export default ReelPlayer
