import {
  Root,
  Viewport,
  Video,
  Container,
  useMediaPlaying,
} from '@react-av/core'
import { useLayoutEffect } from 'react'

function PlayPauseButton() {
  const [playing, setPlaying] = useMediaPlaying()

  useLayoutEffect(() => setPlaying(true), [])

  return (
    <button data-cursor-hover onClick={() => setPlaying(!playing)}>
      {playing ? 'Pause' : 'Play'}
    </button>
  )
}

const ReelPlayer = () => {
  return (
    <Root>
      <Container>
        <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </Container>
      <Viewport>
        <PlayPauseButton />
      </Viewport>
    </Root>
  )
}

export default ReelPlayer
