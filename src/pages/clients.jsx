import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import styles from '@sp/clients.module.scss'
import Page from 'components/Page'
import Swapper from 'components/Swapper'
import { clientsContent } from '@/config'

export default function Clients() {
  return (
    <Page>
      <VisuallyHidden asChild>
        <h1>{clientsContent.seoTitle}</h1>
      </VisuallyHidden>
      <div className={styles.main}>
        <p>{clientsContent.subtitle}</p>
        <Swapper items={clientsContent.items} />
      </div>
    </Page>
  )
}
