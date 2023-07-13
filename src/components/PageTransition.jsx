import styles from '@sc/PageTransition.module.scss'
import { forwardRef } from 'react'

const PageTransition = forwardRef(({ internalRefs: { curtain } }, ref) => (
  <div ref={ref}>
    <div ref={curtain} id="curtain" className={styles.curtain}></div>
  </div>
))

export default PageTransition
