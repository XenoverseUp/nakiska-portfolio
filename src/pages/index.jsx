import styles from '@sp/index.module.scss'
import Page from 'components/Page'

export default function Home() {
  return (
    <Page>
      <div className={styles.main}>
        <h1>
          I'm Nakiska, a creative director & interaction designer based in
          Brooklyn.
        </h1>
      </div>
    </Page>
  )
}
