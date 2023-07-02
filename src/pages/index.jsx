import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import styles from '@sp/index.module.scss'
import Page from 'components/Page'
import { homeContent } from '@/config'

export default function Home() {
  return (
    <Page>
      <div className={styles.main}>
        <VisuallyHidden asChild>
          <h1>{homeContent.seoTitle}</h1>
        </VisuallyHidden>
        <h2 data-cursor-text>{homeContent.visibleTitle}</h2>
      </div>
    </Page>
  )
}
