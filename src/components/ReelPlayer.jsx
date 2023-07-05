import {
  Root,
  Viewport,
  Video,
  Container,
  useMediaPlaying,
} from '@react-av/core'
import { useLayoutEffect } from 'react'
import useHasCursor from '../hooks/useHasCursor'
import styles from '../styles/components/ReelPlayer.module.scss'
import cx from 'cx'
import Play from '../icons/Play'
import Pause from '../icons/Pause'

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
      {!playing ? <Play className={styles.play} /> : <Pause />}
    </button>
  )
}

const ReelPlayer = ({ src, title, closeReel }) => {
  const hasCursor = useHasCursor()

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
        {...(!hasCursor.current && { onClick: closeReel })}
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
