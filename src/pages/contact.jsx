import styles from '@sp/contact.module.scss'
import Page from 'components/Page'

export default function Contact() {
  return (
    <Page>
      <div className={styles.main}>
        <p>If you like what you see, say hi</p>
        <a href="mailto:hi@nakiskashaikh.com">hi@nakiskashaikh.com</a>
      </div>
    </Page>
  )
}
