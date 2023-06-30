import { useEffect, useLayoutEffect, useRef } from 'react'
import styles from '@sc/Swapper.module.scss'
import useIndex from 'hooks/useIndex'
import useBoolean from 'hooks/useBoolean'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { SWAP_DURATION } from '@/config'

const Swapper = ({ items }) => {
  const [index, { increment }] = useIndex({
    count: items.length,
  })
  const [swapping, _, setSwapping] = useBoolean(false)

  useEffect(() => {
    const interval = setInterval(() => swapping && increment(), SWAP_DURATION)

    return () => clearInterval(interval)
  })

  return (
    <div
      className={styles.swapper}
      onMouseEnter={() => setSwapping(true)}
      onMouseLeave={() => setSwapping(false)}
    >
      <TransitionGroup component={null}>
        <CSSTransition
          unmountOnExit
          key={index}
          classNames={'swap'}
          timeout={1000}
        >
          <span>{items[index]}</span>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default Swapper
