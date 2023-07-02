import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import styles from '@sp/services.module.scss'
import Page from 'components/Page'
import Swapper from 'components/Swapper'
import { servicesContent } from '@/config'

export default function Services() {
  return (
    <Page>
      <VisuallyHidden asChild>
        <h1>{servicesContent.seoTitle}</h1>
      </VisuallyHidden>
      <div className={styles.main}>
        <p data-cursor-text>{servicesContent.subtitle}</p>
        <Swapper items={servicesContent.items} />
      </div>
    </Page>
  )
}
