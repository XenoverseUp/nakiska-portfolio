import styles from '@sc/Fade.module.scss'
import { forwardRef } from 'react'

const Fade = forwardRef((_, ref) => (
  <div ref={ref} className={styles.curtain}></div>
))

export default Fade
