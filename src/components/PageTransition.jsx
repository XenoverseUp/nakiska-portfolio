import styles from '@sc/PageTransition.module.scss'
import { forwardRef } from 'react'

import { ReactComponent as Star } from 'assets/svg/Star.svg'

const PageTransition = forwardRef(
  ({ internalRefs: { curtain, curtainShadow } }, ref) => (
    <div ref={ref} aria-hidden="true">
      <div ref={curtain} id="curtain" className={styles.curtain}>
        <div className={styles.curtainContent}>
          <Star fill="red" />
          <span>Nakiska Skaikh</span>
        </div>
      </div>
      <div
        ref={curtainShadow}
        id="curtain-shadow"
        className={styles.curtainShadow}
      />
    </div>
  )
)

export default PageTransition
