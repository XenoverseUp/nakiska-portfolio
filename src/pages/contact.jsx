import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import styles from '@sp/contact.module.scss'
import Page from 'components/Page'
import { contactsContent } from '@/config'

export default function Contact() {
  return (
    <Page>
      <VisuallyHidden asChild>
        <h1>{contactsContent.seoTitle}</h1>
      </VisuallyHidden>
      <div className={styles.main}>
        <p>{contactsContent.subtitle}</p>
        <a href={`mailto:${contactsContent.mail}`}>{contactsContent.mail}</a>
      </div>
    </Page>
  )
}
