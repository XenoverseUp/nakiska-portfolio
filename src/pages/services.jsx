import styles from '@sp/services.module.scss'
import Page from 'components/Page'
import Swapper from 'components/Swapper'

export default function Services() {
  return (
    <Page>
      <div className={styles.main}>
        <p>what I do is</p>
        <Swapper {...{ items }} />
      </div>
    </Page>
  )
}

const items = [
  'creative direction',
  'journey mapping',
  'brand strategy',
  'interface design',
  'Heuristics',
  'information Architecture',
  'Logo Design',
  'Digital Experience Platforms',
  'Product Design',
  'App Design',
  'Audio/Visual Experiments ',
  'Data Visualizations',
  'Game Design',
  'Package Design',
  'Prototyping',
  'Journey Mapping',
  'Product Validation',
  'Iterative Testing',
  'Set Design',
  'Engagement Strategy',
  'Copywriting',
  'Marketing Campaigns',
]
