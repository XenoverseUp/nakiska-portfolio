import {
  Root,
  Viewport,
  Video,
  Container,
  useMediaPlaying,
} from '@react-av/core'
import { useLayoutEffect } from 'react'
import useHasCursor from 'hooks/useHasCursor'
import styles from '@sc/ReelPlayer.module.scss'
import cx from 'cx'
import Play from '@/src/icons/Play'
import Pause from '@/src/icons/Pause'
import { Track, Range, Thumb } from '@radix-ui/react-slider'
import { ProgressBarRoot, ProgressBarBufferedRanges } from '@react-av/sliders'

function ProgressBar() {
  return (
    <ProgressBarRoot className={styles.sliderRoot} data-cursor-hover>
      <Track className={styles.sliderTrack} data-cursor-hover>
        <ProgressBarBufferedRanges
          className={styles.bufferedRange}
          data-cursor-hover
        />
        <Range className={styles.sliderRange} data-cursor-hover />
      </Track>
      <Thumb className={styles.sliderThumb} data-cursor-hover />
    </ProgressBarRoot>
  )
}

const PlayPauseButton = () => {
  const [playing, setPlaying] = useMediaPlaying()

  useLayoutEffect(() => setPlaying(true), [])

  return (
    <button
      data-cursor-hover
      className={styles.playButton}
      onClick={(e) => {
        e.stopPropagation()
        setPlaying(!playing)
      }}
    >
      {!playing ? <Play className={styles.play} /> : <Pause />}
    </button>
  )
}

export default function ReelPlayer({ src, closeReel }) {
  const hasCursor = useHasCursor()

  return (
    <Root>
      <Container className={styles.container}>
        <Video
          playsInline
          preload="none"
          className={styles.video}
          {...{ src }}
        />
      </Container>
      <Viewport
        inactiveClassName={cx(styles.inactive, {
          [styles.coarse]: !hasCursor.current,
        })}
        className={styles.viewport}
        {...(!hasCursor.current && { onClick: closeReel })}
      >
        <div
          className={cx(styles.close, { [styles.coarse]: !hasCursor.current })}
        >
          <span />
          <span />
        </div>
        <div
          className={styles.controls}
          data-cursor-hover
          {...(!hasCursor.current && { onClick: (e) => e.stopPropagation() })}
        >
          <PlayPauseButton />
          <ProgressBar />
        </div>
      </Viewport>
    </Root>
  )
}
