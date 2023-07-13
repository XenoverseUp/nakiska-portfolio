import { useEffect } from 'react'
import styles from '@sc/Swapper.module.scss'
import useIndex from 'hooks/useIndex'
import useBoolean from 'hooks/useBoolean'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { SWAP_DURATION } from '@/config'
import useHasCursor from '../hooks/useHasCursor'

const Swapper = ({ items }) => {
  const [index, { increment }] = useIndex({
    count: items.length,
  })

  const hasCursor = useHasCursor()

  const [swapping, _, setSwapping] = useBoolean(!hasCursor.current)

  useEffect(() => {
    const interval = setInterval(() => swapping && increment(), SWAP_DURATION)
    return () => clearInterval(interval)
  })

  return (
    <div
      className={styles.swapper}
      {...(hasCursor.current && {
        onMouseEnter: () => setSwapping(true),
        onMouseLeave: () => setSwapping(false),
      })}
    >
      <TransitionGroup component={null}>
        <CSSTransition
          unmountOnExit
          data-cursor-hover
          key={index}
          classNames="swap"
          timeout={1000}
        >
          <span>{items[index]}</span>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default Swapper
