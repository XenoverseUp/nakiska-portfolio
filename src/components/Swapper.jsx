import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useEffect } from 'react'
import styles from '@sc/Swapper.module.scss'
import useIndex from 'hooks/useIndex'
import useBoolean from 'hooks/useBoolean'
import useHasCursor from 'hooks/useHasCursor'
import { SWAP_DURATION } from 'config'

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
      data-cursor-hover
      {...(hasCursor.current && {
        onMouseEnter: () => {
          increment()
          setSwapping(true)
        },
        onMouseLeave: () => setSwapping(false),
      })}
    >
      <TransitionGroup component={null}>
        <CSSTransition
          unmountOnExit
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
