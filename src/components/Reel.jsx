import styles from '@sc/Reel.module.scss'

const Reel = ({ open }) => {
  return (
    open && (
      <section className={styles.main}>
        <h1>Reeel</h1>
        <button data-close-reel data-cursor-hover>
          Close
        </button>
      </section>
    )
  )
}

export default Reel
